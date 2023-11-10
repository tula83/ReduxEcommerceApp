import React from 'react'
import { useSelector } from 'react-redux'
import  {remove} from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {

  const cart=useSelector((state)=>state.Cart)
  const dispatch=useDispatch()

  const handleRemove=(item)=>{
          dispatch(remove(item.id))

  }
  
  return (
    <div className="productsWrapper">
    {cart.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product)} className="btn">
                Remove
            </button>
        </div>
    ))}
</div>
  )
}

export default Cart
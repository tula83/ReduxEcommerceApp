import React from 'react'
import { useDispatch } from 'react-redux'
const SingleItem = ({cart,label}) => {

    const dispatch=useDispatch()
     
    
    const handleAdd=(item)=>{

     }
     const handleRemove=(item)=>{

     }
  return (
    <div className="productsWrapper">
    {cart.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => label==='remove'?handleRemove(product):
              handleAdd(product)
        } className="btn">
                {label}
            </button>
        </div>
    ))}
</div>
  )
}

export default SingleItem
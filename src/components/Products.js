import {useState,useEffect} from 'react'
import { add } from '../store/cartSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { fetchProducts } from '../store/productSlice'

const Products = ()=>{
    const [arr,setArr]=useState([])
    const dispatch=useDispatch();
    const {data,status}=useSelector((state)=>state.product)
    
    const getData=async()=>{
          try{
           const resp= await axios.get(`https://fakestoreapi.com/products`);
           setArr(resp.data)

          }
          catch(err){
             console.log('error in fetching in data ',err)
          }
    }
    useEffect(()=>{
        //getData();
        //using redux
        dispatch(fetchProducts())
    })

    const handleAdd=(item)=>{
           dispatch(add(item));
    }

    return(
         <div className="productsWrapper">
         {data.map((product) => (
             <div className="card" key={product.id}>
                 <img src={product.image} alt="" />
                 <h4>{product.title}</h4>
                 <h5>{product.price}</h5>
                 <button onClick={() => handleAdd(product)} className="btn">
                     Add to cart
                 </button>
             </div>
         ))}
     </div>
         
    )
  
    
  
}

export default Products
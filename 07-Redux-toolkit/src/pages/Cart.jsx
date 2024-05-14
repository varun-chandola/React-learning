import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import {remove} from '../store/cartSlice'

export default function Cart(){
  const cartItems = useSelector(state=>state.cart);
  
  const dispatch = useDispatch()

  function handleRemove(productId){
    dispatch(remove(productId))
  }

  return (
    <>
      <h1>Cart</h1>
      <div>
        {cartItems.map(item=>(
             <div key={item.id} className='card'>
                <img src={item.image} alt='image' />
                <h4>{item.title}</h4>
                <h5>{item.price}</h5>
                <button className='btn' onClick={()=>handleRemove(item.id)}>Remove From Cart</button>
            </div>
        ))}
      </div>
    </>
  )
}
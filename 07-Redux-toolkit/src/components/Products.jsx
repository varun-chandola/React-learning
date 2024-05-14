// https://fakestoreapi.com/products

import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

const Products = () => {
  const dispatch = useDispatch()
    const [products , setProducts] = useState([]);

    useEffect(()=>{
      const fetchProducts = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        setProducts(response.data)
      }

      fetchProducts()
    } , [])

function handleAdd(addedProduct){
  dispatch(add(addedProduct))
}

  return (
      <div className='productsWrapper'>
            {products.map(each => (
        <div key={each.id} className='card'>
          <img src={each.image} alt='image' />
          <h4>{each.title}</h4>
          <h5>{each.price}</h5>
          <button className='btn' onClick={() => handleAdd(each)}>
            Add To Cart
          </button>
        </div>
  ))}
      </div>
  )
}

export default Products
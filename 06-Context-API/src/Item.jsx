import {useContext} from 'react'
import {Context} from './CartProvider'
export default function Item({name , price}){
    const {item , setItem} = useContext(Context)
    return(
    <>
        <p>{name}</p>
        <p>price : ${price}</p>
        <button 
        onClick={()=>setItem([...item , {name , price} ])}
        >Add To Cart</button>
    </>
    )
}
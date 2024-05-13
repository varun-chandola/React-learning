import {useContext} from 'react'
import { Context } from './CartProvider'
export default function Cart(){
    const {item} = useContext(Context)
    let totalSum = 0;
    item.map(each=>{
        totalSum += Number(each.price)
    })
    return(
    <>
        <div>
            <h1>Cart</h1>
            {item.map(each=>
            <li key={Math.random()+300}>{each.name} - {each.price}</li>)}
            <p>Total - ${totalSum}</p>
        </div>
    </>
    )
}
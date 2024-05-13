import {createContext , useState} from 'react'
export const Context = createContext()

const CartProvider = ({children}) =>{
    const [item , setItem] = useState([])
    return(
        <Context.Provider value={{item , setItem}}>
            {children}
        </Context.Provider>
    )
}
export default CartProvider;
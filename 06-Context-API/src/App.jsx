import './App.css'
import Item from './Item.jsx'
import Cart from './Cart.jsx'
function App() {
  return (
    <>
      <h1>Context API</h1>
      <Item name='Iphone 13 pro max' price='2500' />
      <Item name='Macbook Pro' price='5000' />
      <Item name='Apple Watch' price='600' />
      <Cart />
    </>
  )
}

export default App

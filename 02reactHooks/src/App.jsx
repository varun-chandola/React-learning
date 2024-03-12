import { useState } from 'react'
// useState ek function hai is liye {useState} is tarah import kar rahe hai . 
import './App.css'

function App() {
  // useState(10) sets initial value i.e 10 to counter .
let [counter , setCounter] = useState(10);
  // let counter = 0; is se UI me updation nahi ho raha tha.

  // hooks are used to display variable updation across the UI .


  let increase = () =>{
    if(counter < 20){ // max counter val = 20
      counter++;
      setCounter(counter)
    }
  }


  let decrease = () =>{
    if(counter > 0){ // minimun counter val = 0
      counter--;
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Learning ReactJs from youtube</h1>
    <h1>Counter : {counter}</h1>
    <h3>Counter : {counter}</h3>

    <button
    onClick = {increase} // this type of function reference is generally used because it is more readable and it also prevents the re rendering and better for performance
    >Add Value : {counter}</button>

<br />
<br />
  <button 
    onClick = {decrease}
    >Decrease Value : {counter}
  </button>

<br />
<br />

    <button 
    onClick = {()=>{ setCounter(counter + 1)}} // this is also not wrong but it leads to bad performance and bad readablity of the code
    >Add Value (inline onClick) : {counter}
    </button>
    <br /><br />


  <button 
  onClick={()=>{setCounter(counter - 1)}}
  >Descrease Value (inline onClick): {counter}
  </button>


</>
  )
}

export default App
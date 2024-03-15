import { useState } from 'react'

import './App.css'

function App() {
  const [ color , setColor] = useState('white');

  function renderChange(color){
    setColor(color);
  }


  return (
    <>
    <div className='container' style={{backgroundColor:color}}>
      <div>
        <div className='btns'>
          <button
          style={{backgroundColor:'red'}}
          onClick={()=>renderChange('red')}
          >Red
          </button>

          <button
          style={{backgroundColor:'green'}}
          onClick = {()=> renderChange('green')}
          >Green</button>

          <button
          style={{backgroundColor:'blue'}}
          onClick = {()=> renderChange('blue')}
          n>Blue</button>

          <button
          style={{backgroundColor:'yellow' , color:'black'}}
          onClick = {()=>renderChange('yellow')}
          >Yellow</button>

          <button
          style={{backgroundColor:'orange'}}
          onClick = {()=>renderChange('orange')}
          >Orange</button>

          <button
          style={{backgroundColor:'pink'}}
          onClick = {()=>renderChange('pink')}
          >Pink</button>

          <button
          style={{backgroundColor:'cyan' , color:'darkblue'}}
          onClick = {()=>renderChange('cyan')}
          >Cyan</button>

          <button
          style={{backgroundColor:'purple'}}
          onClick={()=>renderChange('purple')}
          >Purple</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

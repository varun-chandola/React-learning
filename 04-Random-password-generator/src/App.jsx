import {useState , useCallback , useEffect , useRef} from 'react'
import './App.css'
function App(){
  
  const [passLength , setPassLength] = useState(8);
  const [numsAllowed , setNumsAllowed] = useState(false);
  const [charsAllowed , setCharsAllowed] = useState(false);
  const [password , setPassword] = useState('');
  
  /* 
  const genRandomPass = useCallback(()=>{
    let generateRandomPassword = ()=>{
    let possibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabdcefghijklmnopqrstuvwxyz';

    if(numsAllowed) possibles += '0123456789';
    if(charsAllowed) possibles += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    let randomPassword = ''
    for(let i = 1 ; i <= passLength ; i++){
      let randomValue = Math.round(Math.random()*possibles.length + 1);
      randomPassword += possibles.charAt(randomValue);
    }

    setPassword(randomPassword)

  }
  } ,[passwordLenght , numsAllowed , charsAllowed]);

*/

  
  
  let generateRandomPassword = ()=>{
    let possibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabdcefghijklmnopqrstuvwxyz';

    if(numsAllowed) possibles += '0123456789';
    if(charsAllowed) possibles += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    let randomPassword = ''
    for(let i = 1 ; i <= passLength ; i++){
      let randomValue = Math.round(Math.random()*possibles.length + 1);
      randomPassword += possibles.charAt(randomValue);
    }

    setPassword(randomPassword)

  }

  // generateRandomPassword() // this is causing too many re renders

  
  // this because it prevents too many re render
  // without using the useCallback
  useEffect(()=>{
    generateRandomPassword()
  } , [passLength , numsAllowed , charsAllowed]);



  // copy to clipboard

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  } , [password])




  return(
  <>
  <div className="container">
  <h1 style={{fontSize:'4rem'}}>Random password Generating application</h1>
    <div className="app">
        <div>
          <input type="text" 
          readOnly 
          placeholder='password' 
          value={password} 
          style={{color:'orange'}} 
          ref={passwordRef}
          />

          <button className='copy' onClick={copyToClipboard}>Copy</button>
        </div>
        <div>
          <input type='range' 
          value={passLength} 
          onChange={(e)=>{setPassLength(e.target.value)}}/>
          <label>Length : {passLength}</label>
          
          <input type='checkbox' className='box'
          onChange={()=>setNumsAllowed((prev)=> !prev)} 
          />
          <label>Numbers</label>
          
          <input type='checkbox' className='box'
          onChange={()=>setCharsAllowed((prev)=>!prev)}
          />
          <label>Characters</label>
        </div>
    </div>
  </div>
  </>
  )
}
export default App;
import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


function App() {
const [length,setLength] = useState(9)
const [number,isNumberallowed] = useState(false)
const [character,isCharacterAllowed] = useState(false)
const [password,SetPassword] = useState("")

const Generate = useCallback(()=>{
 var pass = ""
 let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

 if(number){
  str += "0123456789"
 }
 if(character){
  str += "()@#$%^&*"
 }
 for (let index = 1; index <=length; index++) {
  let char = Math.floor(Math.random()*str.length + 1)
  pass = pass + str.charAt(char)
  
 }
 SetPassword(pass)
},[length,number,character,password]) // it when there is any change in variable when we run the function.
useEffect(()=>{
  Generate()

},[length,number,character])
return (
    <>
    <div className="main">
    <h1 className = "para">Password Generator</h1>
    <div className="input">
      <input type="text" placeholder='pass' value={password} readOnly/>
      <button>copy</button>
    </div>
    <div className="length">
      <input type="range" min = {8} max={100} value={length} onChange={(e)=>{
        setLength(e.target.value)
      }}/>
      <label>Length is {length}</label>
    </div>
    <div className = "num">
      numbers : <input type="checkbox" defaultChecked = {number} onChange={()=>{
        isNumberallowed((prev)=>!prev);
      }}/>
    </div>

    <div className = "char">
      character : <input type="checkbox" defaultChecked = {character} onChange={()=>{
        isCharacterAllowed((prev)=>!prev)
      }}  />
    </div>

    </div>
     
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
                                   //hooks are used to update variables in the UI
function App() {

  let [counter,setCounter] = useState(15)

  //  let counter=5
  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter+1
    setCounter(counter)
  }

  const removeValue=()=>{
    console.log("clicked",counter);
    counter=counter-1
    setCounter(counter)
  }

  return (
    <>
    <h1>learning react</h1>
    <h2>Counter value:{counter}</h2>
    <button 
    onClick={addValue}>Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App

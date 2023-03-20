import { useState } from 'react'
import CounterTwo from '../component/CounterTwo'


function Home() {
  // Hooks = > Hooks is Nothing But A Function
  // useState => Manage Component's State => It return Two Value Element of Array
  // 1. state 2. setState
  const [count, setCount] = useState(0)
  const [state, setState] = useState('Amar')
  const [stateTwo, setStateTwo] = useState('')
  const increment = () => {
    // console.log('Hello')
    setCount(count+1)
  }
  const decrement = ()=>{
    if(count > 0){
      setCount(count-1)
    }
    
  }
  const getInput = (e) => {
      console.log(e.target.value)
      setState(e.target.value)
  }
  return (
    <>
    <h1>Home</h1>
    <h1 style={{color : 'red'}}>The Value of State is : {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={()=>decrement()}>Decrement</button>
    <CounterTwo count={count} />
    <input type={'text'} placeholder='Enter Value' onChange={(e)=>getInput(e)} />
    <h1>Input Value : {state}</h1>
    <input type={'text'} 
    placeholder='Enter Input Data' 
    onChange={(e)=>setStateTwo(e.target.value)} />
    <h1 style={{color : 'green'}}>Another Way of Get Input Value : {stateTwo}</h1>
    </>
  )
}

export default Home
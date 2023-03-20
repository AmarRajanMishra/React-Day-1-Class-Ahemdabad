import { useState } from 'react'
import myimg from '../images/ONbulb.png'

function About() {
  const [color, setColor] = useState('blue')
  return (
    <>
    <input type={'text'} placeholder='Enter Color Name'
     onChange={(e)=>setColor(e.target.value)} />
     <input type={'color'} />
    <h1 style={{color : color}}>About Page</h1>
    <img src={myimg} />
    </>
  )
}

export default About
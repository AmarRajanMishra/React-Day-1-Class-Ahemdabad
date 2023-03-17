import React from 'react'
import Common from '../component/Common'

function Contact() {
    let a = 'Amar Mishra'
  return (
    <>
    <h1>Contact</h1>
    <h1>My Name is {a}</h1>
    <Common name={a} />
    </>
  )
}

export default Contact
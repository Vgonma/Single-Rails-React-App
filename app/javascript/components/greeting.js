import React from 'react'

function Greeting(props) {
  return (
    <div>
      <h1>Greeter</h1>
      <h2>{props.greeting}</h2>
    </div>
  )
}

export default Greeting

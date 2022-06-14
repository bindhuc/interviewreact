import React from 'react'

const Childone = (props) => {
    const person ={
        name:"js"
    }
    const childpress =()=>{
props.pass(person)
    }
  return (
    <div>
        <button onClick={childpress}>child</button>
    </div>
  )
}

export default Childone
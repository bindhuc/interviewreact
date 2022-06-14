import React from 'react'

const Subchild = (props) => {
    const personone ={
        name:"banana",
        age:10
    };

    const buttonpress =()=>{
        props.passDataone(personone)
    }

  return (
    <div>
<button onClick={buttonpress}>subchild</button>

    </div>
  )
}

export default Subchild
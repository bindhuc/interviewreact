import React, { useState } from 'react'
import Childone from './Childone'


const Parentone = () => {
    const[child, setChild]=useState({
       name:"html" ,
    })
    const pass=(data)=>{
setChild(data)
    }
    
  return (
    <div>
<Childone pass={pass}/>
{child.name}
    </div>
  )
}

export default Parentone
import React, {useState} from 'react'
import Subchild from './Subchild';

const Child = (props) => {
    const person ={
        name:"orange",
        age:10
    };
    const [childs,setChilds] =useState({
        name:'pink',
        age:10
    });
    
     const passDataone = (data) =>{
         setChilds(data)
     };
const buttonClick = () =>{
props.passData(person)
}


  return (
    <div>
<button onClick={buttonClick}>child</button>
<Subchild passDataone={passDataone}/>
{childs.name}
{childs.age}


    </div>
  )
}

export default Child
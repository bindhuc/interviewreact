import React,{useState}  from 'react'
import Child from './Child';

const Parent = () => {
    const [child,setChild] =useState({
        name:'apple',
        age:''
    });
    
     const passData = (data) =>{
         setChild(data)
     };
  return (
    <div>
<Child passData={passData}/>
{child.name}
{child.age}
    </div>
  )
}

export default Parent
import React, { useContext } from 'react'
import { usercontext } from './Home'

const Child1 = () => {
  const [data]=useContext(usercontext)
  const datas=data[0].baseUrlImage;
  console.log(datas)
  return (
    <div>
      <h1>Movie Details</h1>
     <div>
        {data[0].results.map(results1=>
        <div style={{display:"flex"}}>
          <div>
           
          <img src={`${datas}/${results1.poster_path}`} style={{width:"300px",height:"250px",margin:"15px"}} alt=""/>
          </div>
          <div>

          <h1 style={{color:"green"}}>Title:{results1.title}</h1>
          <h2 style={{color:"blue"}}>Relesing date:{results1.release_date}</h2>
           </div>
         </div>
        )
      }
         </div>
        
    </div>
  )
}

export default Child1






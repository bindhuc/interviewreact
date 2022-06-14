import React from 'react'
import './Style.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'



const Home = () => {
  return (
    
 
 <div>
    <div className='card-body1'>
      <h6 className='h5'>Vingadores</h6>
         <img src={img1}  className="images" alt=""/>
         <h6  className='h5' >Releasedate:2022</h6>
  </div >
  <div className='card-body2'>
  <h6 className='h5'>Avengers</h6>
         <img src={img2}  className="images" alt=""/>
         <h6  className='h5' >Releasedate:2023</h6>
         </div>
</div>
  

    
        
  )

}

export default Home
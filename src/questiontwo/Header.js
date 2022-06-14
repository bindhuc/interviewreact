import React from 'react'
import './Style.css'

import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div >
        <nav >
    <ul  >
        
        <span>
            <Link to ="home" className='nav'>Home</Link>
        </span>
        <span>
            <Link to ="contact" className='nav'>contact</Link>
        </span>
    </ul>
</nav>
<Outlet/>
    </div>
  )
   
  
}

export default Header
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './questiontwo/Home'
import Contact from './questiontwo/Contact'
import Header from './questiontwo/Header'
import Child1 from './questiontwo/Child1'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     
       <Route path="/" element={<Header/>}>
       <Route path="home" element={<Home/>}/>
       <Route path="contact" element={<Contact/>}/>

       </Route>
     </Routes>
     </BrowserRouter>
     <Home>
       <Child1/>
     </Home>
    </div>
  )
}

export default App
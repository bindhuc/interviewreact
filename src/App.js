import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './questiontwo/Home'
import Contact from './questiontwo/Contact'
import Header from './questiontwo/Header'
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
    </div>
  )
}

export default App
import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Login from './Login';
const Rout = () => {
  return (
    <div>
      <>
        <Routes>
        <Route path='/About' element={<About/>}/>

        <Route path='/Contact' element={<Contact/>}/>

        <Route path='/Login' element={<Login/>}/>

    </Routes>


    </>
    </div>
  )
}

export default Rout

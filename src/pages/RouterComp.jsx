import React from 'react'
import Navbar from '../inc/Navbar';
import About from './About';
import Home from './Home';
import Contact from './Contact';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


const RouterComp = () => {
  return (
   

    <Router>
    <Navbar />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            </Routes>
     </Router>
  )
}

export default RouterComp;



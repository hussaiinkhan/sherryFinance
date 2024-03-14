import React from 'react'
import Navbar from './Navbar';

import About from './About';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </>
      
      </Router>
    </div>
  );
}

export default App;

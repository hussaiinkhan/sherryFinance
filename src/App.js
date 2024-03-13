import React from 'react'
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Hero from './Hero';
import Analytics from './Analytics';
import CardConatiner from './CardConatiner';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <CardConatiner/>
      <Newsletter/>
    </div>
  );
}

export default App;

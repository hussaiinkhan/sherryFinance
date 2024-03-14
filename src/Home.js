import React from 'react'
import Newsletter from './Newsletter';
import Hero from './Hero';
import Analytics from './Analytics';
import CardConatiner from './CardConatiner';
function Home() {
  return (
    <div>
        <Hero/>
        <Analytics/>
        <CardConatiner/>
        <Newsletter/>
    </div>
  )
}

export default Home
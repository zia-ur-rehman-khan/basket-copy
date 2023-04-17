import React from 'react'
import FeaturedProducts from './Featured';
import AllProducts from './All';
import Hero from './Hero';

const index = () => {
  return (
   <>
    <div className='carasoul-container'> 
   <Hero/>
   <FeaturedProducts/>
   <AllProducts/>
   </div>
   </>
  )
}

export default index
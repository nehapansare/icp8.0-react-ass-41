import React from 'react'
import Navbar from './Navbar'
import Bottom from './Bottom'


function Home() {
  return (
    <div>
        <Navbar/>
      <h1 className='page-title'>Home Page</h1>
      <Bottom/>
    </div>
  )
}

export default Home

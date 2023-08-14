import '../index.css'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

import React from 'react'

const MainHeader = () => {
  return (
    <header className='main__header'>
       <div className="container main__header-container">
    <div className="main__header-left">
      <h4>#100DaysOfWorkOut</h4>
      <h1>Join the Legends Of The Fitness World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ex odit vitae, doloremque similique fuga? Deleniti officiis blanditiis fugit eaque nihil amet, natus architecto, iure a aliquam sequi vel? Magnam?</p>
      <Link to="/plans" className='btn lg'>Get Started</Link>
    </div>
    <div className="main__header-right">
      <div className="main__header-circle"></div>
      <div className="main__header-image">  
      <img src={Image} alt='main header image'/>
      </div>
    </div>
       </div>
    </header>
  )
}

export default MainHeader

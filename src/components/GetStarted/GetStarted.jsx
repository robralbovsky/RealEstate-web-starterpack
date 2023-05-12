import React from 'react'
import './GetStarted.css'
const GetStarted = () => {
  return (
    <section className='g-wrapper'>
      <div className='paddings innerWidth g-container'>
          <div className='flexColCenter inner-container'>
            <span className='primaryText'>Get Started with Homyz</span>
            <span className='secondaryText'>Subscribe to our newsletter</span>
            <span className='secondaryText'>Stay up to date with the latest listings</span>
            <button className='button'>Subscribe</button>
          </div>
      </div>
    </section>
  )
}

export default GetStarted;
import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">
            

            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <h1>
                        Discover <br />
                        More Suitable <br /> Properties
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                  <span className="secondaryText">Find a variety of properties that suit your needs</span>
                  <span className="secondaryText">Forget all the hassle of finding the perfect property</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text" placeholder="Search Properties" />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={3600} end={4250} duration={4} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">
                            Premium Listings
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1200} end={1750} duration={4} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">
                            Happy Customers
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={17} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">
                            Awards Won
                        </span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <div className='image-container'>
                    <img src="./hero-image.png" alt="hero" />
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Hero;
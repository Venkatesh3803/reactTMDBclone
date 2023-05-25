// import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import HeroSlider from './heroSlider'

const Hero = () => {
  
    return (
        <div className='hero'>
            <div className="hero-container">
                <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/Best-Movies-Netflix.png" alt="" />
                <div className="hero-info">
                    <h2>title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellendus numquam aperiam nemo. Odit architecto cum deserunt soluta ullam, accusantium omnis? At, rerum quasi dignissimos commodi id blanditiis iusto nostrum!</p>
                    <div className="rating">
                        <h4>Rating :</h4>
                        <AiFillStar color='gold' size={"22"} />
                        <span>5</span>
                    </div>
                    <p>Date OF Release : 12/1/2023</p>
                    <button>WATCH NOW <BsFillPlayFill size={"22"} /></button>
                </div>
                <HeroSlider />
            </div>
        </div>
    )
}

export default Hero
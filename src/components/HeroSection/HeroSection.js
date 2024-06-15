import React from 'react'
import "./HeroSection.css"


function HeroSection({ title , image , descr}) {
    return (
        <>

            <div className="hero-section-container">
                <div className="hero-categories-container">
                <img src={image} alt={title} className='hero-section-img' />
                    <h4 className='text-center text-success '>{title}</h4>
                    <p className='text-center pb-3'>{descr.substring(0 ,40)}...</p>

           
                </div>
            </div>
        </>
    );
}

export default HeroSection

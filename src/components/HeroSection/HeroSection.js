import React from 'react'
import "./HeroSection.css"
import StarRating from '../StarRating/StarRating';

function HeroSection({ title , image , descr,rating, totalstars = 5 }) {
    return (
        <>

            <div >
                <div className="bg-white rounded w-200 m-3">
                <img src={image} alt={title} className='hero-section-img' />
                    <h4 className='text-center text-success '>{title}</h4>
                    <span className="text-center">
                    <StarRating rating={rating} totalstars={totalstars} />
                   </span>
                    <p className='text-center pb-3'>{descr.substring(0 ,40)}...</p>

           
                </div>
            </div>
        </>
    );
}

export default HeroSection

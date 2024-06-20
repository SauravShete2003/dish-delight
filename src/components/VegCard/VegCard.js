import React, { useState } from 'react'
import "./VegCard.css"
import ImgHeartUnfilled from "./heart-unfilled.png"
import ImgHeartFilled from "./heart-filled.png"
import ImgClock from "./clock.png"
import Button from "./../Button/Button"
import {Link} from 'react-router-dom';

function VegCard({ id,title, image, description, time,categories}) {
    const [liked, setLiked] = useState(false)

    return (
        <div className="card-container p-2 rounded-4 border border-secondary-subtle m-3 position-relative">
            <img 
                src={liked ? ImgHeartFilled : ImgHeartUnfilled} 
                className="like-image " 
                onClick={() => {
                    setLiked(!liked)
                }} 
            />
            <img src={image} className="card-image rounded-3 object-fit-cover" />

            <h1 className="card-title fs-5 fw-bold text-center mt-2">{title}</h1>

            <p className="card-disciption fs-6 mt-2">{description.substring(0, 125)}...</p>

            <div className="time-container d-flex align-items-center position-absolute ">
                <img src={ImgClock} className="img-clock position-absolute" />
                <span className="time ms-4 fw-bold">{time}</span>
            </div>

            <Link className="category-card-button" target='_blank' to={`/${categories}/${id}` } >
                        
                <Button text={"Know more"} />
            </Link>

           
        </div>
    )
}

export default VegCard
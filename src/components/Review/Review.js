import React, { useState } from 'react';
import Swal from 'sweetalert2'
import "./Review.css"

function App() {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, review };
        setReviews([...reviews, newReview]);
        setName('');
        setReview('');
        }

        const handleSuccessClick = () => {
            Swal.fire({
              icon: 'success',
              title: "Thank you for your Review. It has been sent",
              timer: 2500,
            })
        
          }
       

    return (
        <div className="App">
            <div className="review-form review-page p-5 rounded-3 bg-secondary mx-auto">
                <form onSubmit={handleSubmit}>
                    <label for="name ">Name : </label><br />
                    <input className='text w-100 py-2 px-2 rounded-2' 
                        type="text"                      
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    /><br /><br />
                    
                    <label for="review">Review :</label><br />
                    <textarea className='text w-100 px-2 rounded-2'        
                        placeholder='Comment'
                        rows="4"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    ></textarea><br /><br />
                    <div className='button d-flex justify-content-center'>
                    <button type="submit" className='button bg-black text-white py-1 mt-3 px-5 rounded-3' onClick={handleSuccessClick}>Submit</button>
                    </div>
                </form>
            </div>

            <div className="reviews m-5">
                <u><h2 className='heading text-center'>Reviews</h2></u>
                <div id="reviewList" className='review-card-container d-flex justify-content-start flex-wrap'>
                    {reviews.map((rev, index) => (
                        <div key={index} className="review bg-secondary text-white m-4 p-2 rounded-3">
                            <h6 className='name px-3 pt-2 mb-3'> Name : {rev.name}</h6>
                            <p className='name px-3'> Comment : {rev.review}</p>
                            <h5 className='text-center mb-2'>🍝thanks {rev.name} for review🍝</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

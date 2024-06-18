


    function StarRating({ rating, totalstars = 5 }) {
      return (
        <div className="star-rating">
          {[...Array(totalstars)].map((star, index) => (
  
  
            <i key={index}  className={index < rating ? "fa-solid fa-star":"fa-regular fa-star"} style={{color: index < rating ? "#ffbb33": "#000"}}></i>
  
          ))}
        </div>
      );
    }
    
 

export default StarRating

import "./Veg.css";
import DishData from "../../data/SpcialDishdata";
import { Link } from "react-router-dom";

function Veg({ title, description, image, time, watch, id}) {
    return (
       <>
      
        <div>
      
           

            <div className="spacial-dish-card">
           
                <img src={image} className="spcial-dish-image" />
                <h4 className="dish-card-title">{title}</h4 >
                <p>{description.substring(0, 120)}...</p>
                <h6 className="dish-timeing">{time} </h6>
                <img src={watch} className="watch-icon" />
               <Link to={`/Paneer Butter Masala-01Veg/${id}`} ><button type="butoon"className="know-more-button">Know More</button></Link>
            </div>



        </div>
        </>
    );
}








function VegData() {
    return (
        <>
       
       <div className="backcover-container">
        <img src=""/>
       </div>
       <h1 className="special-dish-title">Special Dish</h1>
        <div className="vegdata-container" >
          
            
            {DishData.map((dish, i) => (
                <Veg
                    key={i}
                    image={dish.image}
                    title={dish.title}
                    description={dish.discription}
                    time={dish.time}
                    watch={dish.watch}
                />
            ))}
        </div>
        </> )
}



export default VegData;

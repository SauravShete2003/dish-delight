import "./CategoriesSection.css"
import BreakFast from "../../../assets/BreakFast.jpg"
import Veg from "../../../assets/veg-img.jpeg"
import NonVeg from "../../../assets/NonVeg.jpeg"
import FastFood from "../../../assets/fast-food.jpg"
// import { useParams } from "react-router-dom";

  
function CategoriesSection({name , image , timing}) {

  const homeImage= {
     "BreakFast" : BreakFast,
     "Veg" : Veg,
     "Non-Veg" : NonVeg,
     "FastFood" : FastFood
  }

  return (

  <>
 <div className="categories-section">
  <h2>Explore Categories</h2>
  <div className="categories-container">
    <img src={homeImage[Image]} className=""/>
    <span>{name}</span>
    <span>{timing}</span>

  </div>
 </div>

  

      
  </>
  )
}

export default CategoriesSection

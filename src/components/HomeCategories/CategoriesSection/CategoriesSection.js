import "./CategoriesSection.css"
import HomeCategories from "../HomeCategories";
// import { useParams } from "react-router-dom";


function CategoriesSection() {

  // const {id} = useParams()
  // const selecetedData = HomeCategories.find((HomeObject)=>HomeObject.id == id)
  return (

  <>


  <div className='home-container'>
  <div className="categories-container">
        <div className="categories-img-container">
          <img src="" className="categories-img" />

        </div>

        <span className="categories-name">{}</span>
        <span className="categories-time">{}</span>
      </div>
    <div>

    </div>
  </div>
  
  </>
  )
}

export default CategoriesSection

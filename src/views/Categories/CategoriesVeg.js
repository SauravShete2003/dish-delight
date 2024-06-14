import "./CategoriesVeg.css"
import Data from "../../data/CategoriesVegData/CategoriesVesdata"
import ImgLike1 from "../../assets/CategoriesVeg/heart.png"
import ImgClock from "../../assets/CategoriesVeg/clock.png"
import Button from "../../components/Button/Button"

function VegCard() {

  return (
    <>

      <div className="veg-container">

        {Data.map((blogObject, i) => {
          const {
            title,
            Image,
            Discription,
            time,
            // categories
          } = blogObject


          return (
            <div className="card-container">

              <img src={ImgLike1} className="like-image" />
              <img src={Image} className="card-image" />

              <h1 className="card-title">{title}</h1>

              <p className="card-disciption">{Discription.substring(0, 150)}...</p>

              <div className="time-container">
                <img src={ImgClock} className="img-clock" />
                <span className="time">{time}</span>


                 {/* <span className="categories-name">{categories} </span>  */}
              </div>

              <div className="category-card-button">
                <Button text={"Know More"} />
                </div>


              </div>

              )
        })}
            </div>




    </>
      )
}



      export default VegCard


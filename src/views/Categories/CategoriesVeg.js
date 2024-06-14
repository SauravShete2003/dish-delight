import "./CategoriesVeg.css"
import Data from "../../data/CategoriesVegData/CategoriesVesdata"
import VegCard from "../../components/VegCard/VegCard"

function CategoriesVeg() {

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

          return (<VegCard title={title} image={Image} description={Discription} time={time} />)
        })}
      </div>

    </>
  )
}

export default CategoriesVeg


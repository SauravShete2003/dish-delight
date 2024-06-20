import "./CategoriesNonveg.css"
import Data from "./../../../data/CategoriesNonvegdata"
import VegCard from "./../../../components/VegCard/VegCard"
// import headerimg from "./header-img.jpg"
import Navbar from "./../../../components/Navbar/Navbar"
import Footer from "./../../../components/Footer/Footer"


function CategoriNonveg() {

  return (
    <>
      <Navbar />
      {/* <img src={headerimg} className="header-img" />
      <h1 className="head-title">Veg Delicious Food</h1> */}


      <div className="veg-container">

        {Data.map((blogObject, i) => {
          const {
            id,
            title,
            image,
            description,
            time

          } = blogObject
        

          return (<VegCard title={title} image={image} description={description} time={time} id={id} />)
        })}
      </div>

      <Footer />

    </>
  )
}

export default CategoriNonveg ;

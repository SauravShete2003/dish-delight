import "./CategoriNonveg.css"
import Data from "./../../../data/CategoriesNonvegdata"
import VegCard from "./../../../components/VegCard/VegCard"
import Navbar from "./../../../components/Navbar/Navbar"
import Footer from "./../../../components/Footer/Footer"


function CategoryNonveg() {

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
            time,
            categories

          } = blogObject
        

          return (<VegCard title={title} image={image} description={description} time={time} id={id} categories={categories}/>)
        })}
      </div>

      <Footer />

    </>
  )
}

export default CategoryNonveg ;

import "./CategoriesVeg.css"
import Data from "./../../../data/CategoriesVesdata"
import VegCard from "./../../../components/VegCard/VegCard"
import headerimg from "./header-img.jpg"
import Navbar from "./../../../components/Navbar/Navbar"
import Footer from "./../../../components/Footer/Footer"
import Button from "../../../components/Button/Button"
import { useState } from "react"


function CategoriesVeg() {

  const [filteredData, setFilteredData] = useState([...Data])
  const [searchText, setSearchText] = useState("")

  return (
    <>
      <Navbar />
      <img src={headerimg} className="header-img" />
      <span className="head-title">Veg Delicious Food</span>

        <div className=" search-container d-flex align-items-center mx-auto ">
          <input 
            type="text" 
            placeholder="serach" 
            className="seachbar rounded-3 m-2 p-1 fs-5"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
            />
             {setSearchText}
        </div>
   



      <div className="veg-container">

        {filteredData.map((blogObject, i) => {
          const {
            id,
            title,
            image,
            description,
            time,
            categories

          } = blogObject

          return (
          
          
          <VegCard title={title} image={image} description={description} time={time} id={id} categories={categories} />)
        })}
      </div>

      <Footer />

    </>
  )
}

export default CategoriesVeg


import React, { useEffect, useState } from 'react'
import "./Recipe.css"
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import DataCard from '../../../data/CategoriesVesdata'
import HolidaySpecial from '../../../components/HolidayRecipes/HolidaysRecipe'

function Recipe() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [text, setText] = useState('')

  const { id } = useParams()

  const selectedData = DataCard.find((dataObject) => dataObject.id === id)

  const handleSuccessClick = () =>{
    Swal.fire({
      icon: 'success',
      title: "Thank you for your Review. It has been sent",
      timer: 2500,
})

  }

  return (<>
    <div>
      <Navbar />
    </div>

    <div className='recipe-body '>
      <h1 className='title text-center'>{selectedData.title}</h1>
      <img src={selectedData.image} className="recipe-img mx-auto d-block rounded-3 img-thumbnail mt-1" />
      <div className='duration text-center mt-3 '>{selectedData.up}</div>

      <h1 className='heading text-center mt-3 mx-3 py-2 rounded-4 bg-secondary'>Ingredients </h1>

      <div className='ingredients-container '>
        <div className='ingredient-list p-4 m-4 rounded-4 bg-seconday '>

          {selectedData.ingredients.map((element, i) =>
            <ul key={i}>
              <b><li className='ingrients '>{element}</li></b>
            </ul>
          )}
        </div>
        <img src={selectedData.ingredientImg} className='ingredient-img rounded-4 m-4 img-thumbnail' />
      </div>

      <h2 className='heading text-center mt-5 mx-3 py-2 rounded-4 bg-secondary'> {selectedData.recipeName} PROCESS</h2>

      <div className='recipe h4'>
        {selectedData.steps.map((element, i) => {

          return <div className='steps m-1'>
            <ul><li >{element}</li></ul>
          </div>
        })}
      </div>

      <h2 className='heading text-center'>Live a Review</h2>

      <div className='review-page w-50 p-5 rounded-3 bg-secondary'>
        <div className='input-div mb-4 px-4'>
          <h5>Review</h5>
          <input type='text'
            placeholder='Comment '
            onChange={(e) => {
              setText(e.target.value)
            }}
            className=' input-1 p-2 pb-6  pb-5 ' />
        </div>

        <div className='input-div mb-4 px-4'>
          <h5>Name</h5>
          <input type='text'
            placeholder='Enter Name'
            onChange={(e) => {
              setText(e.target.value)
            }}
            className=' input-1 p-2 ' />
        </div>

        <div className='button d-flex justify-content-center'>
          <button onClick={handleSuccessClick} type='submit' className='btn bg-black text-white'>Submit</button> 
        </div>
        
      </div>

    <HolidaySpecial/>
      <Footer />
    </div>

  </>
  )
}

export default Recipe

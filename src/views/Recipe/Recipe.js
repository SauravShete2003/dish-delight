import React, { lazy, useEffect } from 'react'
import "./Recipe.css"
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'

import DataCard from '../../data/CategoriesVegData/CategoriesVesdata'

function Recipe() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()

  const selectedData = DataCard.find((dataObject) => dataObject.id === id)

  return (<>
    <div>
      <Navbar />
    </div>

    <div className='recipe-body '>
      <img src={selectedData.image} className="recipe-img w-50 h-50 mx-auto d-block rounded-3 img-fluid  " />
      <div className='duration'>{selectedData.up}</div>

      <h1 className='category text-center mt-5 py-2 rounded-4 '>Ingredients </h1>

      <div className='ingredients-container my-5'>
        <div className='ingredient-list bg-info p-4 rounded-4'>

          {selectedData.ingredients.map((element, i) =>
            <ul key={i}>
              <b><li className='ingrients'>{element}</li></b>
            </ul>
          )}
        </div>
        <img src={selectedData.ingredientImg} className='ingredient-img rounded-4 img-fluid' />
      </div>

      <div>


        <h2 className='directions text-center  py-2 roundedy-5  '>Direction: {selectedData.recipeName}</h2>
        {selectedData.steps.map((element, i) => {

          return <p className='steps '>
            <ul><li >{element}</li></ul>
          </p>
        })}
      </div>

      <h3>Live a Review</h3>

      <div className='review-page'>
        <h6>Review</h6>
        <input type='text'
          placeholder='Comment '
          className=' input-1' />


        <h6>Email</h6>
        <input type='email'
        placeholder='Enter Email'
         className=' input ' />

        <h6>Password</h6>
        <input type='text'
        placeholder='Enter Password' 
        className=' input ' />

      </div>
    </div>




  </>
  )
}

export default Recipe

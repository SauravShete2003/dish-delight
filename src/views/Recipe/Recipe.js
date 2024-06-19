import React, { useEffect } from 'react'
import "./Recipe.css"
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'

import DataCard from '../../data/CategoriesVesdata'

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
      <h1 className='title text-center'>{selectedData.title}</h1>
      <img src={selectedData.image} className="recipe-img mx-auto d-block rounded-3 img-thumbnail mt-1" />
      <div className='duration text-center mt-3 '>{selectedData.up}</div>

      <h1 className='title text-center mt-3 py-2 rounded-4 '>Ingredients </h1>

      <div className='ingredients-container '>
        <div className='ingredient-list p-4 m-4 rounded-4  '>

          {selectedData.ingredients.map((element, i) =>
            <ul key={i}>
              <b><li className='ingrients '>{element}</li></b>
            </ul>
          )}
        </div>
        <img src={selectedData.ingredientImg} className='ingredient-img rounded-4 m-4 img-thumbnail' />
      </div>

        <h2 className='title text-center mt-5  py-2 roundedy-5 '> {selectedData.recipeName} process</h2>

        <div className='recipe h4'>
        {selectedData.steps.map((element, i) => {

          return <div className='steps m-1'>
            <ul><li >{element}</li></ul>
          </div>
        })}
      </div>

      <h2 className='title text-center'>Live a Review</h2>

      <div className='review-page w-50 p-5'>
        <h6>Review</h6>
        <input type='text'
          placeholder='Comment '
          className=' input-1 p-2 m-3' />


        <h6>Email</h6>
        <input type='email'
          placeholder='Enter Email'
          className=' input-1 p-2 m-3' />

        <h6>Password</h6>
        <input type='text'
          placeholder='Enter Password'
          className=' input-1 p-2 m-3' />

      </div>
    </div>




  </>
  )
}

export default Recipe

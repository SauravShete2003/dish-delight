import React, { useEffect, useState } from 'react'
import "./Recipe.css"
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import DataCard from '../../../data/CategoriesVesdata'
import Review from '../../../components/Review/Review'

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

    <div className='recipe-body color-white'>
      <h1 className='title text-center'>{selectedData.title}</h1>
      <img src={selectedData.image} className="recipe-img mx-auto d-block rounded-3 img-thumbnail mt-1 " />
      <div className='duration text-center mt-3 '>{selectedData.up}</div>
      <h4 className='recipe-description px-5 mt-2 mx-auto '>{selectedData.description}</h4>
      <h2 className='heading text-center mt-5 mx-3 py-3 rounded-4 bg-secondary'>{selectedData.ingredientTitle}</h2>

      <div className='ingredients-container mt-4'>
        <div className='ingredient-list  p-3 my-4  rounded-4 bg-secondary'>

          {selectedData.ingredients.map((element, i) =>
            <ul key={i}>
              <b><li className='ingrients '>{element}</li></b>
            </ul>
          )}
        </div>

          <img src={selectedData.ingredientImg} className='ingredient-list rounded-4 my-4  img-thumbnail' />
       
      </div>

      <h2 className='heading text-center mt-5 mx-3 py-3 rounded-4 bg-secondary'> {selectedData.recipeName} Process</h2>

      <div className='recipe bg-secondary p-4 h5 mt-3 mb-4 rounded-3 mx-auto'>
        {selectedData.steps.map((element, i) => {

          return <div className='steps m-1'>
            <ul><li >{element}</li></ul>
          </div>
        })}
      </div>

      <u><h2 className='heading text-center'>Live a Review</h2></u>

      <Review />

      <Footer />
    </div>

  </>
  )
}

export default Recipe

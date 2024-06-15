import React from 'react'
import "./Recipe.css"
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'

import DataCard from '../../data/CategoriesVegData/CategoriesVesdata'

function Recipe() {

  const { id } = useParams()

  const selectedData = DataCard.find((dataObject) => dataObject.id === id)

  return (<>
  <Navbar/>
    <div>
      <h1 className='title text-center '>{selectedData.title}</h1>
      <img src={selectedData.image} className="recipe-img w-50 h-50 mx-auto d-block rounded-3 img-fluid" />
      <p className='recipe-description '>{selectedData.description}</p>
      <h1 className='category bg-success py-2 m-3 rounded-4 '>Ingredients </h1>

      <div className='ingredients-container my-5'>
        <div className='ingredient-list bg-success p-4 rounded-4'>

          {selectedData.ingredients.map((element, i) => {
            return <ul key={i}>
              <b><li className='ingrients'>{element}</li></b>
            </ul>
          })}
        </div>
        <img src={selectedData.ingredientImg} className='ingredient-img rounded-3 img-fluid' />
      </div>

      <div>

      
        <h2 className='directions text-center  py-2 roundedy-5  '>PROCESS: {selectedData.recipeName}</h2>
        {selectedData.steps.map((element, i) => {

          return <p className='steps '>
            <ul><li >{element}</li></ul>
          </p>

        })}
      </div>

      <h2 className='recipe-process text-center'>Recipe</h2>
      <p className='recipe '>{selectedData.recipe}</p>
    </div>





  </>
  )
}

export default Recipe

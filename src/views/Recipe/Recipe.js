import React from 'react'
import "./Recipe.css"
import { useParams } from 'react-router-dom'

import DataCard from '../../data/CategoriesVegData/CategoriesVesdata'

function Recipe() {

  const {id} = useParams()

const selectedData = DataCard.find((dataObject)=>dataObject.id===id)

  return (<>
    <div>
      <h1 className='title text-center '>Recipe: {selectedData.title}</h1>
      <img src={selectedData.image} className="recipe-img  mx-auto d-block " />
      <p className='recipe-description'>{selectedData.description}</p>
      <h4 className='category'>Category:{selectedData.categories}</h4>
      <h1 className='category'>Proccess: {selectedData.title}</h1>
      <div>
        
      </div>
    </div>
  </>
  )
}

export default Recipe

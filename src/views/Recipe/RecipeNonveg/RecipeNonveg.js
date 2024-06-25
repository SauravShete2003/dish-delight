import React, { useEffect } from 'react'
import "./RecipeNonveg.css"
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import NonVegDataCard from '../../../data/CategoriesNonvegdata'
import Review from '../../../components/Review/Review'

function RecipeNonveg() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()

  const selectedData = NonVegDataCard.find((dataObject) => dataObject.id === id)

  return (<>
    <div>
      <Navbar />
    </div>

    <div className='recipe-body '>
      <h1 className='title text-center'>{selectedData.title}</h1>
      <img src={selectedData.image} className="recipe-img mx-auto d-block rounded-3 img-thumbnail mt-1" />
      <div className='duration text-center mt-3 '>{selectedData.up}</div>
      <h4 className='recipe-description px-5 mt-2 mx-auto '>{selectedData.description}</h4>
      <h2 className='heading text-center text-white mt-5 mx-3 py-3 rounded-4 bg-secondary'>{selectedData.ingredientTitle} </h2>

      <div className='ingredients-container mt-4'>
      <ul className='ingredient-list bg-secondary text-white p-4 my-3 rounded-4 '>
          {selectedData.ingredients.length > 1 ? (
            selectedData.ingredients.map((element, i) => (
              <li className='h6 mx-3 my-2' key={i}>{element}</li>
            ))
          ) : (
            <p>No element available.</p>
          )}
        </ul>
    
          <img src={selectedData.ingredientImg} className='ingredient-list rounded-4 my-4  img-thumbnail' />
        
      </div>

      <h2 className='heading text-center text-white mt-5 mx-3 py-3 rounded-4 bg-secondary'> {selectedData.recipeName} Process</h2>

      <div className='recipe bg-secondary text-white h5 p-4 rounded-3 mt-3 mb-3 mx-auto'>
        {selectedData.steps.map((element, i) => {

          return <div className='steps m-1'>
            <ul><li >{element}</li></ul>
          </div>
        })}
      </div>

      <h2 className='heading text-center m-4 p-3 rounded-3 '>Live a Review</h2>

      <Review />

      <Footer />
    </div>

  </>
  )
}

export default RecipeNonveg

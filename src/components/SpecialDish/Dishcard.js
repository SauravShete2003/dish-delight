import "./DishCard.css"
import { useParams } from "react-router-dom"
import SpcialDishdata from "../../data/SpcialDishdata"


function Dishcard() {
    const { id } = useParams()

    const selectSpcialDishdata = SpcialDishdata.find((SpcialDishdataObject) => SpcialDishdataObject.id === id)

    return (
        <>
            <h1 className="title">{selectSpcialDishdata.title}</h1>
            <div className="main-container">
                <img src={selectSpcialDishdata.image} className="image-2"></img>
            </div>
            <div className="discription-container">
                <p >{selectSpcialDishdata.discription}</p>
            </div>

            <h1 className="Ingredients-title">Ingredients</h1>
            <ul className="Ingredients-information">
                {selectSpcialDishdata.Ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h1 className="Ingredients-title">Cooking Method</h1>
            <ul type="square" className="cooking-method">{selectSpcialDishdata.cookingMethod.map((cookingMethod, index) => (
                <li key={index}>{cookingMethod}</li>
            ))}</ul>
            <h1 className="Ingredients-title">Nutrition </h1>
            <ul type="disc" className="nutration">{selectSpcialDishdata.Nutrition.map((Nutrition, index) => (
                <li key={index}>{Nutrition}</li>
            ))}</ul>

             <h1 className="Ingredients-title">Recipe video</h1>
         <div className="recipe-viedo">{selectSpcialDishdata.recipevedio}</div>









        </>
    )
}

export default Dishcard
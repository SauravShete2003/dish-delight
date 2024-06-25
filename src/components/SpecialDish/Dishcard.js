import "./DishCard.css";
import { useParams } from "react-router-dom";
import SpecialDishdata from "../../data/SpcialDishdata";

function Dishcard() {
    const { id } = useParams();
    const selectSpecialDishdata = SpecialDishdata.find((dish) => dish.id === id);

    if (!selectSpecialDishdata) {
        return <p>Dish not found</p>;
    }

    return (
        <>
            <h1 className="title">{selectSpecialDishdata.title}</h1>
            <div className="main-container">
                <img src={selectSpecialDishdata.image2} className="image-2" alt={selectSpecialDishdata.title}></img>
            </div>
            <div className="description-container">
                <p>{selectSpecialDishdata.discription}</p>
            </div>
            <h1 className="Ingredients-title">Ingredients</h1>
            <ul className="Ingredients-information">
                {selectSpecialDishdata.Ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h1 className="Ingredients-title">Cooking Method</h1>
            <ul type="square" className="cooking-method">
                {selectSpecialDishdata.cookingMethod.map((method, index) => (
                    <li key={index}>{method}</li>
                ))}
            </ul>
            <h1 className="Ingredients-title">Nutrition</h1>
            <ul type="disc" className="nutrition">
                {selectSpecialDishdata.Nutrition.map((nutrition, index) => (
                    <li key={index}>{nutrition}</li>
                ))}
            </ul>
            <h1 className="Ingredients-title">Recipe Video</h1>
            <div className="recipe-video">{selectSpecialDishdata.recipevedio}</div>
        </>
    );
}

export default Dishcard;

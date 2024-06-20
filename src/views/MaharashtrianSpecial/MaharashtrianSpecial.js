import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MaharashtrianSpecialData } from '../../data/MaharashtrianSpecialData';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function MaharashtrianSpecial() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const RecipeDetails = MaharashtrianSpecialData.find((dataObject) => dataObject.id === id);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <h1>{RecipeDetails.name}</h1>
                <img src={RecipeDetails.image} alt={RecipeDetails.name} />
                <h3>Ingredients:</h3>
                <div>
                    {RecipeDetails.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </div>
                <div>
                    <h3>Instructions:</h3>
                    {RecipeDetails.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MaharashtrianSpecial;

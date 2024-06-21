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

    if (!RecipeDetails) {
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <div className="container">
                    <h1>Recipe not found</h1>
                    <p>We couldn't find the recipe you're looking for.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className=" w-50 mx-auto">
                <h1 className='text-center text-black'>{RecipeDetails.title}</h1>
                <div className="d-flex justify-content-center my-4">
                    <img src={RecipeDetails.image} alt={RecipeDetails.title} className='w-100 rounded h-400' />
                </div>

                <h3 className='text-success text-center'>Ingredients:</h3>
                <ul className='bg-secondary text-white rounded py-3'>
                    {RecipeDetails.ingredients.length > 0 ? (
                        RecipeDetails.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.trim()}</li>
                        ))
                    ) : (
                        <p>No ingredients available.</p>
                    )}
                </ul>
                <h3 className='text-success text-center'>Instructions:</h3>
                <ul className='bg-secondary text-white rounded p-4'>
                    {RecipeDetails.instructions.length > 0 ? (
                        RecipeDetails.instructions.map((instruction, index) => (
                            <li key={index}>{instruction.trim()}</li>
                        ))
                    ) : (
                        <p>No instructions available.</p>
                    )}
                </ul>
            </div>
            <div className=" w-50 mx-auto">
                <h2 className='text-center text-primary'>Nutrition</h2>
                <ul className='bg-secondary text-white rounded p-4 mb-3'>
                {RecipeDetails.nutrition.length > 0 ? (
                        RecipeDetails.nutrition.map((nutrition, index) => (
                            <li key={index}>{nutrition.trim()}</li>
                        ))
                    ) : (
                        <p>No nutrition available.</p>
                    )}
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default MaharashtrianSpecial;

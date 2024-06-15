import React from 'react';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import { categoriesData } from "../../data/HomeData" 

function HomeCategories() {
  return (
    <>
      <h1 className="bg-primary fs-5 mx-3 my-3 text-black px-1 py-4 rounded text-center">
        Categories Section
      </h1>
      <div className="d-flex justify-content-evenly align-items-center">
        {categoriesData.map((category, index) => (
          <CategoriesSection
            key={index}
            name={category.name}
            image={category.image}
            timing={category.timing}
          />
        ))}
      </div>
      <h1>popular Food recipe</h1>
    </>
  );
}

export default HomeCategories;

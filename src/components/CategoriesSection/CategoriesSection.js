import React from 'react';
import BreakFast from "../../../assets/BreakFast.jpg";
import Veg from "../../../assets/veg-img.jpeg";
import NonVeg from "../../../assets/NonVeg.jpeg";
import FastFood from "../../../assets/fast-food.jpg";

function CategoriesSection({ name, image, timing }) {
  const homeImage = {
    "BreakFast": BreakFast,
    "Veg": Veg,
    "Non-Veg": NonVeg,
    "FastFood": FastFood,
  };

  return (
    <div className="categories-section">
      <h2>Explore Categories</h2>
      <div className="categories-container">
        <img src={homeImage[image]} alt={name} className="category-image" />
        <span className="category-name">{name}</span>
        <span className="category-timing">{timing}</span>
      </div>
    </div>
  );
}

export default CategoriesSection;
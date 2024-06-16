import React from 'react';
import "./CategoriesSection.css"



function CategoriesSection({ name, image, timing }) {

  return (
    <>
    <div className="categories-section">
      
      <div className="categories-container">
        <img src={image} alt={name} className="category-image" />
        <span className="category-name">{name}</span>
        <span className="category-timing">{timing}</span>
      </div>
    </div>

    </>
  );
}

export default CategoriesSection;
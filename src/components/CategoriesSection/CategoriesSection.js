import React from 'react';
import "./CategoriesSection.css"
import { Link } from 'react-router-dom';



function CategoriesSection({id, name, image, timing }) {

  return (
    <>
    <Link className="categories-section"  to={`/VegCard/${id}`}>
      
      <div className="categories-container">
        <img src={image} alt={name} className="category-image" />
        
        <span className="category-name">{name}</span>
        <span className="category-timing">{timing}</span>
      </div>
    </Link>

    </>
  );
}

export default CategoriesSection;
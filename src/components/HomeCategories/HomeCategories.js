import React from 'react';


const categoriesData = [
  {
    name: "Breakfast",
    image: "",   
    timing: "⏱️15 min"
  },
  {
    name: "Veg",
    image: "",
    timing: "⏱️30 min"
  },
  {
    name: "Non-Veg",
    image: "",
    timing: "⏱️45 min"
  },
  {
    name: "FastFood",
    image: "",
    timing: "⏱️20 min"
  }
];

function HomeCategories() {
  return (
    <>
      <h1 className="bg-primary fs-5 mx-3 my-3 text-black px-1 py-4 rounded text-center">
        Categories Section
      </h1>
      <div className="d-flex justify-content-evenly align-items-center">
        {
          categoriesData.map((category, index) => {
            return (
              <div key={index} className="category-card mx-2 text-center">
                <img src={category.image} alt={category.name} className="category-image mb-2" />
                <h2 className="category-name">{category.name}</h2>
                <p className="category-timing">{category.timing}</p>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default HomeCategories;

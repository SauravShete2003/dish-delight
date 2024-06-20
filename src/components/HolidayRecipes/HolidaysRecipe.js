import { HolidayData } from "../../data/HolidaySpecial";

import { Link } from "react-router-dom";

function HolidayRecipe({ id,name,description, imageUrl }) {
  return (
    <Link className="col-md-4 my-3" to={`/maharashtraspecial/${id}`}>
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top h-200" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.substring(0, 70)}...</p>
        </div>
      </div>
    </Link>
  );
}

function HolidaySpecials() {
  return (
    <div className="container my-5">
      <h2 className="bg-secondary w-50 mx-auto text-center my-4 rounded text-white py-2">
      Maharashtrian Special
      </h2>

      {HolidayData ? (
        <div className="my-4">
          <div className="row">
            {HolidayData.map((id ,recipe, index) => (
              <HolidayRecipe
                id={id}
                key={index}
                imageUrl={recipe.imageUrl}
                name={recipe.name}
                description={recipe.description}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading holiday specials...</p>
      )}
    </div>
  );
}

export default HolidaySpecials;

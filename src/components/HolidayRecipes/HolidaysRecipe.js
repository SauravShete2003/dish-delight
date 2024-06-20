import { HolidayData } from "../../data/HolidaySpecial";
import "./HolidaysRecipe";

function HolidayRecipe({ name, description, imageUrl }) {
  return (
    <div className="col-md-4 my-3">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top h-200" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.substring(0, 70)}...</p>
        </div>
      </div>
    </div>
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
            {HolidayData.map((recipe, index) => (
              <HolidayRecipe
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

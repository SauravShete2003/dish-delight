import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import Footer from '../../components/Footer/Footer';
import HolidaySpecials from '../../components/HolidayRecipes/HolidaysRecipe';
import "./Home.css"




function HomeCategory() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <img src='https://thumbs.dreamstime.com/b/foodie-food-eating-party-celebration-concept-72712787.jpg' className='heading-img '/>
        </div>
        <HomeCategories />
        <HolidaySpecials />
        <Footer />

      </div>


    </>
  );
}

export default HomeCategory;

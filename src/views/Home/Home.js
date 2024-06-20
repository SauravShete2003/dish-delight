import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import Footer from '../../components/Footer/Footer';
import HolidaySpecials from '../../components/HolidayRecipes/HolidaysRecipe';





function HomeCategory() {
  return (
    <>
      <div>
        <Navbar />
        <HomeCategories />
        <HolidaySpecials />
        <Footer />

      </div>


    </>
  );
}

export default HomeCategory;

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
        <div>
          <img src='https://media2.thrillophilia.com/images/photos/000/155/974/original/1559380670_c-fakepath-urban-adventures-morocco_marrakech_cooking_class_prep.jpg?' className='w-100 h-500  '/>

        </div>
        <HomeCategories />
        <HolidaySpecials />
        <Footer />

      </div>


    </>
  );
}

export default HomeCategory;

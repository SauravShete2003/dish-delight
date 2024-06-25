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
          <img src='https://t3.ftcdn.net/jpg/07/57/41/36/360_F_757413685_tppGP1P42HUS5KDAu9Zl0Xal24A96qyI.jpg' className='heading-img '/>
        </div>
        <HomeCategories />
        <HolidaySpecials />
        <Footer />

      </div>


    </>
  );
}

export default HomeCategory;

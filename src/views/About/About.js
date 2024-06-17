import "./About.css"
import HotelStaff from "../../assets/About/hotel staff image.png"
import Instagram from "../../assets/About/instagram.png"
import Linkdine from "../../assets/About/linkdine12.png"
import Youtube from "../../assets/About/youtube (1).png"
import Facebook from "../../assets/About/facebook.png"


function About() {

    return (<>
        <div className="about-container">
            <img src=""
                className="restaurant-img" />
        </div>

        <h1 className="about-title">About Us</h1>

        <div className="paragraph-image-container">

            <div className="image-container">

                <img src={HotelStaff} className="staff-image" />

            </div>

            <div className=" paragraph-container">
                <p className="paragraph-content">

                    <h2>About</h2>

                    A restaurant is a business that prepares and serves food and drinks to customers.
                    Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
                    Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from
                    inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
                    do right and far exceed expectations daily. We do the right thing and lead by putting people first. Each and every connection with our team,
                    guests and shareholders is our opportunity to create an experience that feeds Far Exceeds Expectations Daily and show how much we care.
                    <br />
                    <br />
                    <h5>Social media :-</h5>

                </p>


            </div>

        </div>
        <div className="social-media-icon-main-container">

            <div className="social-media-icon-container">
               <a href="https://www.linkedin.com/company/food-recipe/"target="_blank" ><img src={Linkdine} className="social-media-icon" /></a>
               <a href="https://www.instagram.com/cookingvideos/?hl=en"target="_blank" ><img src={Instagram} className="social-media-icon" /></a>
               <a href="https://www.youtube.com/@tastyrecipes" target="_blank"><img src={Youtube} className="social-media-icon" /></a>
               <a href="https://www.facebook.com/groups/448377041919906/"target="_blank" ><img src={Facebook} className="social-media-icon" /></a>
            </div>
            
        </div>
        <h1 className="our-team-title">Our Team</h1>

        <div className="our-team-container">
            <div className="team-member"></div>
            <div className="team-member"></div>
            <div className="team-member"></div>
            <div className="team-member"></div>
            <div className="team-member"></div>

        </div>

    </>)

}


export default About
import "./About.css"
import HotelStaff from "../../assets/About/hotel staff image.png"


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
                <img src="https://static.vecteezy.com/system/resources/thumbnails/024/748/853/small/a-rustic-taco-appetizer-with-fried-beef-garlic-and-cilantro-generated-by-ai-free-photo.jpg"
                    className="image1" />
                <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="image3" />
                <img src="https://images.livemint.com/img/2020/02/03/1600x900/5c7d349e-b6c5-11e9-b019-a4f68f70ee78_1564936211309_1580739078400.jpg"
                    className="image2" />
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


                </p>


            </div>
        </div>

    </>)

}

export default About
import "./About.css"
import HotelStaff from "../../assets/About/hotel staff image.png"
import Instagram from "../../assets/About/instagram.png"
import Linkdine from "../../assets/About/linkdine12.png"
import Youtube from "../../assets/About/youtube (1).png"
import Facebook from "../../assets/About/facebook.png"
import GitHub from "../../assets/About/github-sign.png"
import Gmail from "../../assets/About/gmail.png"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"


function About() {

    return (<>
        <Navbar />
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
                   
                    

                </p>


            </div>

        </div>
        
        <h1 className="our-team-title">Our Team</h1>

        <div className="our-team-container">
            <div className="team-member">
                <img src="https://i.pravatar.cc/150?img=14" className="team-member-image" />
                <h5 className="member-name">Saurav shete</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <img src={Linkdine} className="icon-12" />
                    <img src={GitHub} className="icon-12" />
                    <img src={Gmail} className="icon-12" />
                </div>

            </div>

            <div className="team-member">
                <img src="https://i.pravatar.cc/150?img=18" className="team-member-image" />
                <h5 className="member-name">Saurav shete</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <img src={Linkdine} className="icon-12" />
                    <img src={GitHub} className="icon-12" />
                    <img src={Gmail} className="icon-12" />
                </div>
                
            </div>

            <div className="team-member">
                <img src="https://i.pravatar.cc/150?img=25" className="team-member-image" />
                <h5 className="member-name">Saurav shete</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <img src={Linkdine} className="icon-12" />
                    <img src={GitHub} className="icon-12" />
                    <img src={Gmail} className="icon-12" />
                </div>
            </div>

            <div className="team-member">
                <img src="https://i.pravatar.cc/150?img=18" className="team-member-image" />
                <h5 className="member-name">Saurav shete</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <img src={Linkdine} className="icon-12" />
                    <img src={GitHub} className="icon-12" />
                    <img src={Gmail} className="icon-12" />
                </div>
            </div>

            <div className="team-member">
                <img src="https://i.pravatar.cc/150?img=18" className="team-member-image" />
                <h5 className="member-name">Saurav shete</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <img src={Linkdine} className="icon-12" />
                    <img src={GitHub} className="icon-12" />
                    <img src={Gmail} className="icon-12" />
                </div>
            </div>

        </div>
        <Footer />
    </>)

}


export default About
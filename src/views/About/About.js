import "./About.css"
import HotelStaff from "../../assets/About/hotel staff image.png"
import Linkdine from "../../assets/About/linkdine12.png"
import GitHub from "../../assets/About/github-sign.png"
import Gmail from "../../assets/About/gmail.png"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ImgPranay from "../../assets/About/pranay img.jpeg"
import ImgShriya from "../../assets/About/shriya.jpeg"
import ImgSaurav from "../../assets/About/saurav.jpeg"
import ImgLakshman from "../../assets/About/lakshman.jpeg"
import { Link } from "react-router-dom"


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

                    A Restaurants and other food establishments utilize standardized recipes.
                    A recipe is a set of instructions that describes how to prepare a certain food.
                    Regular recipes often leave room for interpretation, giving ranges for cooking times,
                    offering suggestions for ingredient substitutions, or measuring by cups instead of weight.
                    Standardized recipes seek to reduce interpretation as much as possible.
                    A standardized recipe is defined as a recipe with specific ingredients and ingredient quantities,
                    a specific cook time, and a set of instructions that ensure a consistent product is produced each time the recipe is used.



                </p>


            </div>

        </div>

        <h1 className="our-team-title">Our Team</h1>

        <div className="our-team-container">
            <div className="team-member">
                <img src={ImgPranay} className="team-member-image" />
                <h5 className="member-name">Pranay Dandekar</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <Link to="https://www.linkedin.com/in/pranayrdandekar7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><img src={Linkdine} className="icon-12" /></Link>
                    <Link to="https://github.com/pranayrdandekar7" ><img src={GitHub} className="icon-12" /></Link>
                    <Link to="pranayrdandekar7@gmail.com" ><img src={Gmail} className="icon-12" /></Link>
                </div>

            </div>

            <div className="team-member">
                <img src="https://avatars.githubusercontent.com/u/113831137?v=4" className="team-member-image" />
                <h5 className="member-name">Sakshi Lambe</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <Link to="https://www.linkedin.com/in/sakshilambe1997/" ><img src={Linkdine} className="icon-12" /></Link>
                    <Link to="https://github.com/sakshilambe1997" ><img src={GitHub} className="icon-12" /></Link>
                    <Link to="" ><img src={Gmail} className="icon-12" /></Link>
                </div>

            </div>

            <div className="team-member">
                <img src={ImgShriya} className="team-member-image" />
                <h5 className="member-name">Shriya Borkar</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <Link to="http://www.linkedin.com/in/shriya-borkar-15465122b" ><img src={Linkdine} className="icon-12" /></Link>
                    <Link to="https://github.com/shriyaborkar358" ><img src={GitHub} className="icon-12" /></Link>
                    <Link to="shriyaborkar71@gmail.com" ><img src={Gmail} className="icon-12" /></Link>
                </div>
            </div>

            <div className="team-member">
                <img src={ImgSaurav} className="team-member-image" />
                <h5 className="member-name">Saurav Shete</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <Link to="https://www.linkedin.com/in/saurav-shete/" ><img src={Linkdine} className="icon-12" /></Link>
                    <Link to="https://github.com/SauravShete2003/" ><img src={GitHub} className="icon-12" /></Link>
                    <Link to="sauravshete72@gmail.com" ><img src={Gmail} className="icon-12" /></Link>
                </div>
            </div>

            <div className="team-member">
                <img src={ImgLakshman} className="team-member-image" />
                <h5 className="member-name">Lakshman Kolpe</h5>
                <h6 className="member-11">member</h6>

                <div className="member-social-media-icon">
                    <Link to="https://www.linkedin.com/feed/" ><img src={Linkdine} className="icon-12" /></Link>
                    <Link to="https://github.com/lakshmankolpe" ><img src={GitHub} className="icon-12" /></Link>
                    <Link to="lakshmankolpe912@gmail.com" ><img src={Gmail} className="icon-12" /></Link>
                </div>
            </div>




        </div>
        <Footer />
    </>)

}


export default About
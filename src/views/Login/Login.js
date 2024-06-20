import Navbar from "./../../components/Navbar/Navbar"
import "./Login.css"
import Footer from "./../../components/Footer/Footer"
import LoginImg from "./../../assets/Login-Img/background-img-4.jpg"
import Facebook from "./../../assets/FooterImg/facebook.png"
import Google from "./../../assets/FooterImg/google.png"
import Email from "./../../assets/FooterImg/gmail.png"
import Button from "./../../components/Button/Button"
import "./../../components/Button/Button.css"
import toast ,{Toaster} from "react-hot-toast"

function Login(){
    return(
        <>
        <Navbar/>
        <br></br><br></br>
        <img src={LoginImg} className="background-img"/>
        <div className="login-main-div">
            <p className="login-heading">Login Page</p>
            <div className="login-logo-div">
                <img src={Facebook} className="login-logo-img"/>
                <img src={Google} className="login-logo-img"/>
                <img src={Email} className="login-logo-img"/>

            </div>

            <div className="Form-div">
                <form>
                <input type="text" className="input-box" placeholder="Username"></input>
                <input type="text" className="input-box" placeholder="Password"></input><br></br>
                <button className="btn" type="submit" onClick={()=>{toast.success("login successfully!!")}}>Login</button>
                </form>
               
                
            </div>



        </div>
        
        <Footer/>

        <Toaster/>
        
        </>
    )
}


export default Login
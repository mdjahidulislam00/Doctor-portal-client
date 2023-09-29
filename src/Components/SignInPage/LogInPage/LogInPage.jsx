import Footer from "../../ShareComponents/Footer/Footer"
import Navbar from "../../ShareComponents/Navbar/Navbar"
import loginPageImage from '../../../assets/images/login.png'
import LoginFrom from "../LogInFrom/LoginFrom"

const LogInPage = () => {
  return (
    <div>
        <Navbar />
        <div className="flex justify-between items-center my-10">
            <div className="basis-5/12">
                <LoginFrom />
            </div>
            <div className="basis-6/12">
                <img className="w-[700px]" src={loginPageImage} alt="Log In page image" />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LogInPage
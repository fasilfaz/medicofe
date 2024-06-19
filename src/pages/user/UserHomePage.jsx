import AboutUs from "../../components/About"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import UserHome from "../../components/user/UserHome"
import DoctorsCard from "../admin/DoctorsCard"
import Services from "./Services"


const UserHomePage = () => {
  return (
    <>
        <UserHome/>
        <Services/>
        <DoctorsCard/>
        <ContactForm/>
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default UserHomePage
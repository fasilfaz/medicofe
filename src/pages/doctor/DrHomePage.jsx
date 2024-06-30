import AboutUs from "../../components/About"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import AdminDashboard from "../../components/admin/AdminDashboard"
import { DrHome } from "../../components/doctor/DrHome.jsx"
import DoctorsCard from "../admin/DoctorsCard"
import Services from "../user/Services"


export const DrHomePage = () => {
  return (
    <>
        <DrHome/>
        <Services/>
        <ContactForm/>
        <AboutUs/>
        <Footer/>
    </>
  )
}


import AboutUs from "../../components/About"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import AdminDashboard from "../../components/admin/AdminDashboard"
import DoctorsCard from "../admin/DoctorsCard"
import Services from "../user/Services"


export const DrHomePage = () => {
  return (
    <>
        <AdminDashboard/>
        <Services/>
        <DoctorsCard/>
        <ContactForm/>
        <AboutUs/>
        <Footer/>
    </>
  )
}


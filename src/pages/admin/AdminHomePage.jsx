
import AboutUs from "../../components/About"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import AdminDashboard from "../../components/admin/AdminDashboard"
import DoctorsCard from "./DoctorsCard"
import ServiceCard from "./ServiceCard"


const AdminHomePage = () => {
  return (
    <>
        <AdminDashboard/>
        <ServiceCard/>
        <DoctorsCard/>
        <ContactForm/>
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default AdminHomePage
import ContactForm from "../components/ContactForm"
import banner from "../assets/banner.png"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <div>
        <div className="relative bg-cover bg-center h-[500px] p-44" style={{ backgroundImage: `url(${banner})` }}></div>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default ContactPage
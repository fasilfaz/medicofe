import Footer from "../../components/Footer"
import DoctorsCard from "../admin/DoctorsCard"
import banner from "../../assets/banner.png"


const UserAppointmentPage = () => {
  return (
    <div>
        <div className="relative bg-cover bg-center h-[500px] p-44" style={{ backgroundImage: `url(${banner})` }}></div>
        <DoctorsCard/>
        <Footer/>
    </div>
  )
}

export default UserAppointmentPage
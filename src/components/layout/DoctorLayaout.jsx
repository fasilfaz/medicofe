import { Outlet } from "react-router-dom"
import { DrNavbar } from "../navbar/DrNavbar"


const DoctorLayout = () => {
  return (
    <>
     <nav>
        <DrNavbar/>
     </nav>
     <Outlet/>
    </>
  )
}

export default DoctorLayout
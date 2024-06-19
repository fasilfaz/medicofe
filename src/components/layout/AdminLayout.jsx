import { Outlet } from "react-router-dom"
import { AdminNavbar } from "../navbar/AdminNavbar"


const AdminHomeLayout = () => {
  return (
    <>
     <nav>
        <AdminNavbar/>
     </nav>
     <Outlet/>
    </>
  )
}

export default AdminHomeLayout
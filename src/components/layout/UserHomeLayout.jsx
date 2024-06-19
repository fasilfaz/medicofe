import { Outlet } from "react-router-dom"
import   {UserNavbar}  from "../navbar/UserNavbar"


const UserHomeLayout = () => {
  return (
    <>
     <nav>
        <UserNavbar/>
     </nav>
     <Outlet/>
    </>
  )
}

export default UserHomeLayout
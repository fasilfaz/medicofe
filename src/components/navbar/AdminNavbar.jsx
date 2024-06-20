import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserAlt, faSquarePlus, faBell, faUserDoctor, faUserGroup, faHomeAlt, faCalendarCheck, faCircleInfo, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'



//admin navbar

export const AdminNavbar = () => {

  const adminNavLinks = [
    {
      path: '/admin/homepage',
      icon: faHomeAlt,
    },
    {
      path: "/admin/users",
      icon: faUserGroup,
    },
    {
      path: "/admin/doctors",
      icon: faUserDoctor,
    },
    {
      path:"/admin/doctorscard",
      icon: faCalendarCheck,
    },
    {
      path:"/admin/services-page",
      icon: faSquarePlus,

    },
    // {
    //   path:"/admin/services-card",
    //   value: "card",
    // },
    {
      path:"/admin/notifications",
      icon: faBell,
    },
    
    {
      path: "/admin/about",
      icon: faCircleInfo,
    },
    {
      path: "/user/logout",
      icon: faSignOutAlt,
    },
   
    
    {
      path: '/admin/profile',
      icon: faUserAlt,
    },
    
  ]

  const [open, setOpen] = useState(true)
  const menuClicked = ( ) => {
    console.log("menu clicked")
    setOpen(!open)
  }
  return (
    <nav className="p-2 bg-gray-100">
      <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div>
            <span className="text-color text-3xl font-bold">Medi</span>
            <span className="text-slate-500 font-thin text-2xl">Co</span>
          </div>
          <div className="md:hidden mt-2">
            <button onClick={menuClicked}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
        <div className={`flex justify-center ${open ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            {adminNavLinks.map((link, index) => (
                
              <Link key={index} to={link.path}>
                <li className="text-slate-500 
                    text-lg
                    hover:bg-color 
                    px-3 
                    py-1
                    rounded-full
                  hover:text-white
                    transform ease-in-out 
                    duration-500">
                      <FontAwesomeIcon icon={link.icon} className="mr-2" />
                  {link.value}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
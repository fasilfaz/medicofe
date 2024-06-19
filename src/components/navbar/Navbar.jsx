import { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {

  const navLinks = [
    {
      path: "/",
      value: "Home",
    },
    {
      path: "/user/register",
      value: "Register",
    },
    {
        path: "/user/login",
        value: "Login",
    }
  ]

  const [open, setOpen] = useState(true)
  const menuClicked = ( ) => {
    console.log("menu clicked")
    setOpen(!open)
  }
  return (
    <nav className="m-2">
      <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div>
            <Link to="/doctor/register">
              <span className="text-color text-3xl font-bold">Medi</span>
              <span className="text-slate-500 font-thin text-2xl">Co</span>
            </Link>
            
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
            {navLinks.map((link, index) => (
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

export default Navbar
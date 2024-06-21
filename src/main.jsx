import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import './index.css'
import HomeLayout from './components/layout/HomeLayout.jsx'
import EasyMethod from './components/protucted-routes/EasyMethod.jsx'
import UserHomeLayout from './components/layout/UserHomeLayout.jsx'
import UserHomePage from './pages/user/UserHomePage.jsx'
import AdminHomeLayout from './components/layout/AdminLayout.jsx'
import Profile from './components/profile/profile.jsx'
import Logout from './components/user/Logout.jsx'
import DoctorLayout from './components/layout/DoctorLayaout.jsx'
import DrLogin from './components/doctor/DrLogin.jsx'
import DrRegister from './components/doctor/DrRegister.jsx'
import DrProfile from './components/profile/DrProfile.jsx'
import { DrNavbar } from './components/navbar/DrNavbar.jsx'
import AdminHomePage from './pages/admin/AdminHomePage.jsx'
import { DrHomePage } from './pages/doctor/DrHomePage.jsx'
import Users from './pages/admin/Users.jsx'
import { Doctors } from './pages/admin/Doctors.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Notifications from './components/Notifications.jsx'
import { Provider } from 'react-redux'
import store from './components/redux/store.jsx'
import ServiceAdding from './pages/admin/ServiceAdding.jsx'
// import ServiceCard from './pages/admin/ServiceCard.jsx'
// import Services from './pages/user/Services.jsx'
import ServicePage from './pages/ServicePage.jsx'
import UserServicePage from './pages/user/UserServicePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import DoctorsCard from './pages/admin/DoctorsCard.jsx'
import UserAppointmentPage from './pages/user/UserAppointmentPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServiceUpdate from './pages/admin/ServiceUpdate.jsx'
import Booking from './components/Booking.jsx'
// import UserRoutes from './components/protucted-routes/UserRoutes.jsx'


const router = createBrowserRouter([
  {
    element: (
          <HomeLayout/>
         
    ),
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/user/login',
        element: <LoginPage />
      },
      {
        path: '/user/register',
        element: <RegisterPage />
      },
      {
        path: '/doctor/register',
        element: <DrRegister/>
      },
      {
        path: '/doctor/login',
        element: <DrLogin/>
      }
    ],
  },
 {
  element: (
    <EasyMethod>
      <UserHomeLayout/>
    </EasyMethod>
      
  ),
  children: [
    {
      path: '/userhome',
      element: <UserHomePage/>
    },
    {
      path: '/user/profile',
      element: <Profile/>
    },
    {
      path: "/user/services",
      element: <UserServicePage/>
    },
    {
      path: "/user/contact",
      element: <ContactPage/>
    },
    {
      path: '/user/logout',
      element: <Logout/>
    },
    {
      path:"/user/about",
      element: <AboutPage/>
    },
    {
      path: "/user/appointment",
      element: <UserAppointmentPage/>
    }
    
    
  ]
 },
 {
  element: (
    <EasyMethod>
      <AdminHomeLayout/>
    </EasyMethod>
  ),
  children: [
    {
      path: '/admin/homepage',
      element: <AdminHomePage/>
    },
    {
      path: '/admin/profile',
      element: <Profile/>
    },
    {
      path: '/admin/users',
      element: <Users/>
    },
    {
      path: "/admin/doctors",
      element: <Doctors/>
    },
    {
      path: '/admin/services-add',
      element: <ServiceAdding/>
    },
    // {
    //   path: "/admin/services-card",
    //   element: <ServiceCard/>
    // },
    {
      path: "/admin/services-update/:id",
      element: <ServiceUpdate/>
    },
    {
      path: "/admin/services-page",
      element: <ServicePage/>
    },
    {
      path: "/admin/notifications",
      element: <Notifications/>
    },
    {
      path: "/admin/doctorscard",
      element: <DoctorsCard/>
    },
    {
      path: "/admin/about",
      element: <AboutPage/>
    },
    {
      path: "/admin/book/:id",
      element: <Booking/>
    }
  ]
 },
 {
  element: (
    <EasyMethod>
      <DoctorLayout/>
    </EasyMethod>
  ),
  children: [
    {
      path: '/doctor/homepage',
      element: <DrHomePage/>
    },
    {
      path: '/doctor/login',
      element: <DrLogin/>
    },
    {
      path: '/doctor/register',
      element: <DrRegister/>
    },
    {
      path: '/doctor/users',
      element: <Users/>
    },
    {
      path: "/doctor/services",
      element: <UserServicePage/>
    },
    {
      path: "/doctor/contact",
      element: <ContactPage/>
    },
    {
      path: '/doctor/about',
      element: <AboutPage/>
    },
    {
      path: "/doctor/doctors",
      element: <Doctors/>
    },
    {
      path: "/doctor/navbar",
      element: <DrNavbar/>
    },
    {
      path: '/doctor/profile',
      element: <DrProfile/>
    },
    {
      path: "/doctor/appointment",
      element: <UserAppointmentPage/>
    }
  ]
 }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
      <ToastContainer position='bottom-right' />
    </React.StrictMode>
  </Provider>
    

  
)

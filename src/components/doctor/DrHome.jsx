import { Link } from "react-router-dom";
import drwbg from "../../assets/drwbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

export const DrHome = () => {

  return (


    <div className="p-20 bg-gray-100 ">
      <div className="flex justify-evenly">
        <div className="flex flex-col p-0 w-[500px] mt-10">
          <div className="text-3xl font-bold text-slate-500">
          Providing Quality <span className="text-color">Healthcare </span>for a <br />
          <span className="text-color"> Brighter </span>and <span className="text-color">Healthy </span>Future
          </div>
          <br />
          <br />
          <p className="text-slate-500 font-medium text-xl">At our hospital, we are dedicated to providing exceptional medical care to our patients and their families.
             Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
          </p>
        </div>
        <div className="w-[450px]">
          <img src={drwbg} alt="" />
        </div>
      </div>
      <div>
        <button className="bg-color 
                            p-3 
                            rounded-2xl 
                            text-white 
                            hover:bg-white 
                            hover:text-color 
                            hover:border-2 
                            hover:border-color 
                            ml-14">
            <Link to='/doctor/appointmentList'>
            View Appointments
            </Link>
          
        </button>
      </div>
      <butoon
      className="fixed
      text-xl
      bottom-20 
      right-20 
      p-4 
      rounded-full 
      shadow-lg
       bg-red-600 
    text-white 
    hover:bg-white
     hover:text-red-600 
     hover:border-2 
     hover:border-red-600"
    >
      <Link to="/doctor/bloodbank">
        <FontAwesomeIcon icon={faDroplet} className="mr-2" />Blood Bank
      </Link>
    </butoon>
      
    </div>


  )
}

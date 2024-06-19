import { Link } from "react-router-dom";
import drbg from "../assets/drwbg.png";

const HomePage = () => {

  return (


    <div className="p-20">
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
          <img src={drbg} alt="" />
        </div>
      </div>
      <div>
        <button className="bg-color ml-14 p-3 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color">
            <Link to="/user/register" >
            Register first
            </Link>
          
        </button>
      </div>
    </div>


  )
}

export default HomePage
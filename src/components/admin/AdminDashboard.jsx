import { Link } from "react-router-dom";
import drbg from "../../assets/drwbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-slate-500 leading-tight mb-4">
            Providing Quality <span className="text-teal-600">Healthcare</span>{" "}
            for a <span className="text-teal-600">Brighter</span> and{" "}
            <span className="text-teal-600">Healthy</span> Future
          </h2>
          <p className="text-gray-600 mb-8">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry.
          </p>

          <button className="bg-color text-white py-2 px-4 rounded hover:bg-white hover:text-color hover:border-2 hover:border-color">
            <Link to="/admin/appointmentList">View Appointments</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <img src={drbg} alt="Doctor" className="rounded-lg " />
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
      <Link to="/admin/bloodbank">
        <FontAwesomeIcon icon={faDroplet} className="mr-2" />Blood Bank
      </Link>
    </butoon>
      </div>
    </div>
  );
};

export default AdminDashboard;

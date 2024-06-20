import { Link } from "react-router-dom";
import drbg from "../../assets/drwbg.png";

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
            <Link to="/view-appointment">View Appointments</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <img src={drbg} alt="Doctor" className="rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

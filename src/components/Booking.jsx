import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const backendUrl = "https://medicoba.onrender.com";
const Booking = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/v1/user/getuser`,
          // "http://localhost:3000/api/v1/user/getuser",

          {
            withCredentials: true,
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await res.data.data;
        console.log("userrr", data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  useEffect(() => {
    const getdoctors = async () => {
      const res = await axios.get(
        `${backendUrl}/api/v1/user/get-drbyid/${id}`,
        // `http://localhost:3000/api/v1/user/get-drbyid/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await res.data.doctor;
      console.log(data, "json");
      setDoctors(data);
    };
    getdoctors();
  }, []);

  const handleBooking = async () => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd");

    const data = {
      
      doctorFName: doctors.firstName,
      userFName: user.firstName,
      userLName: user.lastName,
      doctorLName: doctors.lastName,
      userPhoneNumber: user.phoneNumber,
      appointmentDate: formattedDate,
    };
    console.log(data, "appointment");
    try {
      const res = await axios.post(
        `${backendUrl}/api/v1/user/book-appointment`,
        data,
        // "http://localhost:3000/api/v1/user/book-appointment",
        // data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      toast.success("Booking successfully");
      navigate("/user/appointment");
    } catch (error) {
      console.log(error, "booking error");
    }
  };

  return (
    <section className="p-20 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-color mb-8">
          Book Dr. {doctors.firstName} {doctors.lastName}
        </h2>

        <div className="flex justify-center items-center">
          <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {doctors && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden w-[340px] p-5">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="h-[250px] flex justify-center items-center"
                  >
                    <img
                      src={doctors.image}
                      alt={"doctors image"}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Name</p>
                    <p>
                      {doctors.firstName} {doctors.lastName}
                    </p>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">
                      Qualification
                    </p>
                    <p>{doctors.qualifications}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">
                      Specialization
                    </p>
                    <p>{doctors.specializations}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Experience</p>
                    <p>{doctors.experiences}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Fees</p>
                    <p>{doctors.fees}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Time</p>
                    <p>{doctors.timings}</p>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <p className="text-color font-bold text-lg">Date</p>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </Grid>
                <div className="flex flex-row justify-center pb-2">
                  <div>
                    <Link>
                      <button
                        className="bg-color
                       pr-4 pl-4 pt-2 pb-2 
                       rounded-2xl text-white
                        hover:bg-white hover:text-color hover:border-2
                         hover:border-color m-3"
                        onClick={handleBooking}
                      >
                        Conform
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

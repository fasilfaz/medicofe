import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Booking = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  const handleBooking = async () => {
    try {
        
    } catch (error) {
        
    }
  }
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/user/get-drbyid/${id}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.data.doctor;
      console.log(data, "json");
      setUsers(data);
    };
    getUsers();
  }, []);
  return (
    <section className="p-20 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-color mb-8">
          Book Dr. {users.firstName} {users.lastName}
        </h2>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {users && (
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
                      src={users.image}
                      alt={"doctors image"}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Name</p>
                    <p>
                      {users.firstName} {users.lastName}
                    </p>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">
                      Qualification
                    </p>
                    <p>{users.qualifications}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">
                      Specialization
                    </p>
                    <p>{users.specializations}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Experience</p>
                    <p>{users.experiences}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Fees</p>
                    <p>{users.fees}</p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <p className="text-color font-bold text-lg">Time</p>
                    <p>{users.timings}</p>
                  </Grid>
                </Grid>
                <div className="flex flex-row justify-center pb-2">
                  <div>
                    <Link>
                      <button className="bg-color
                       pr-4 pl-4 pt-2 pb-2 
                       rounded-2xl text-white
                        hover:bg-white hover:text-color hover:border-2
                         hover:border-color m-3"
                         onClick={handleBooking}>
                        Book Now
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

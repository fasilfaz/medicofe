// import {  faPlus,  } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const backendUrl = 'https://medicoba.onrender.com';

const DoctorsCard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        `${backendUrl}/api/v1/admin/getAllDrs`,
        // "http://localhost:3000/api/v1/admin/getAllDrs",
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.data;
      console.log(data);
      setUsers(data);
    };
    getUsers();
  }, []);
  // const handleRemove = async (id) => {
  //     const res = await axios.delete(`http://localhost:3000/api/v1/admin/removeDrs/${id}`,{
  //         withCredentials: true
  //     })
  //     console.log(id);
  //     const data = await res.data;
  //     if (data.message === "doctor deleted"){
  //         setUsers(users.filter(user => user._id !== id));
  //     }
  // };
  return (
    <section className="p-20 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-color mb-4">
          Meet Our Dedicated Team of Doctors
        </h2>
        <p className="text-center text-gray-600 mb-8">
          At Medico Hospital, our team of dedicated doctors is committed to
          delivering the highest quality care. With diverse specialties and a
          patient-first approach, our experienced physicians provide
          personalized and comprehensive medical services. Trust us for expert
          care and compassionate treatment.
        </p>
        <div className="flex justify-center items-center">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {users &&
              users.map((users, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-[340px] p-5"
                >
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
                  </Grid>
                  <div className="flex flex-row justify-center pb-2">
                    <div>
                      <Link to={`/admin/book/${users._id}`}>
                        <button className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsCard;

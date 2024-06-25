import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


const backendUrl = 'https://medicoba.onrender.com';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/v1/user/getuser`,
          // "http://localhost:3000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        const data = await res.data.data;
        console.log(data, "profile");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={420}
            alignItems={"center"}
            justifyContent={"center"}
            margin="auto"
            marginTop={14}
            borderRadius={8}
            padding={3}
            paddingTop={0}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <div className="flex relative flex-col bg-teal-800 p-8 justify-center items-center text-white font-bold text-3xl rounded-t-[30px] w-[420px]">
              <p className="pb-10">{user.role}</p>
            </div>
            <div className="bg-teal-800 p-2 rounded-full absolute w-52 h-52 top-60">
              <img
                className="h-full w-full object-cover rounded-full"
                src={user.image}
                alt="profile image"
              />
            </div>

            <span className="text-teal-800 flex flex-col justify-center relative mt-36 items-center">
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <p className="text-teal-800 font-bold text-lg">Name</p>
                  <p>
                    {user.firstName} {user.lastName}
                  </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <p className="text-teal-800 font-bold text-lg">Email</p>
                  <p>{user.email}</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <p className="text-teal-800 font-bold text-lg">Age</p>
                  <p>{user.age}</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <p className="text-teal-800 font-bold text-lg">Gender</p>
                  <p>{user.gender}</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <p className="text-teal-800 font-bold text-lg">Blood Group</p>
                  <p>{user.bloodGroup}</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <p className="text-teal-800 font-bold text-lg">
                    Phone Number
                  </p>
                  <p>{user.phoneNumber}</p>
                </Grid>
              </Grid>
              <button className="bg-teal-800 px-3 py-1 mt-5 rounded-2xl text-white hover:bg-white hover:text-teal-800 hover:border-2 hover:border-teal-800">
                <Link to="/user/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                </Link>
              </button>
            </span>
          </Box>
          {/* <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full">
        <div className="bg-green-800 p-4 text-white text-center">
          <h2 className="text-2xl font-bold">{user.role}</h2>
        </div>
        <div className="p-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-24 w-24 bg-gray-300 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-right font-semibold">Name:</div>
            <div className="text-left">{user.firstName} {user.lastName}</div>
            <div className="text-right font-semibold">Age:</div>
            <div className="text-left">{user.age}</div>
            <div className="text-right font-semibold">Blood Group:</div>
            <div className="text-left">{user.bloodGroup}</div>
            <div className="text-right font-semibold">Email:</div>
            <div className="text-left">{user.email}</div>
            <div className="text-right font-semibold">Gender:</div>
            <div className="text-left">{user.gender}</div>
            <div className="text-right font-semibold">Phone Number:</div>
            <div className="text-left">{user.phoneNumber}</div>
          </div>
          <div className="mt-4">
            <button className="bg-green-800 text-white py-2 px-4 rounded-full">
              <svg className="h-6 w-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 7l-5 5m0 0l5 5m-5-5h12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

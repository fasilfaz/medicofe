import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const backendUrl = "https://medicoba.onrender.com";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/v1/user/getuser`,

          // "http://localhost:3000/api/v1/user/getuser",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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
              <div className="flex flex-row justify-evenly pb-2">
              <button className="bg-teal-800 px-3 py-1 mt-5 rounded-2xl text-white hover:bg-white hover:text-teal-800 hover:border-2 hover:border-teal-800">
                <Link to="/user/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                </Link>
              </button>
              
              
              {user.role === 'ADMIN' && (
                <button className="bg-teal-800 px-3 py-1 mt-5 rounded-2xl text-white hover:bg-white hover:text-teal-800 hover:border-2 hover:border-teal-800">
                <Link to='/admin/homepage'>
                  <FontAwesomeIcon icon={faHomeAlt} className="mr-2" />
                </Link>
              </button>
              )}
              {user.role !== 'ADMIN' && (
                  <button className="bg-teal-800 px-3 py-1 mt-5 rounded-2xl text-white hover:bg-white hover:text-teal-800 hover:border-2 hover:border-teal-800">
                  <Link to="/userhome">
                    <FontAwesomeIcon icon={faHomeAlt} className="mr-2" />
                  </Link>
                </button>
              )}
              </div>
              
            </span>
          </Box>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

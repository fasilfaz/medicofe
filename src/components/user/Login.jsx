import { Box, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
// import { useRecoilState } from "recoil";
// import { tokenState } from "../../recoil/tokenAtom";


const backendUrl = 'https://medicoba.onrender.com';

const userSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

const Login = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {

    try {
      // const token = Cookies.get("token");

      const res = await axios.post(
        `${backendUrl}/api/v1/user/login`,
        // "http://localhost:3000/api/v1/user/login",
        data,
        // {application},
        { withCredentials: true }
      );
      // setToken(res.data.token);

      let message = await res.data.message;
      if (message === "Admin logged in successfully") {
        toast.success("Admin logged in successfully");
        // Cookies.set('token', res.data.token);

        setTimeout(function () {
          console.log("before");
          navigate("/admin/homepage", { replace: true });
          console.log("after");
        }, 2000);
        console.log("data", Cookies.get("token"));

        console.log(res.data.message);
      } else if (message === "logged in") {
        toast.success("Patient logged in successfully");
        console.log("data", res.data);
        navigate("/userhome", { replace: true });
      }
    } catch (error) {
      toast.error("Error while logging");
      console.log(error);
    }
  };
  // console.log("recoil",token);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={14}
          padding={3}
          borderRadius={8}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography
            variant="h4"
            padding={3}
            textAlign="center"
            className="text-color"
          >
            Login
          </Typography>
          <TextField
            {...register("email")}
            margin="normal"
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            {...register("password")}
            margin="normal"
            type="password"
            label="Password"
            variant="outlined"
          />
          <button
            type="submit"
            className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3"
          >
            Login
          </button>
          <p className="text-sm">
            dont have an account?{" "}
            <Link to="/user/register" className="text-blue-500 underline">
              Register
            </Link>
          </p>
        </Box>
      </form>
    </div>
  );
};

export default Login;

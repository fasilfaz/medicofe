import { Box, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import Cookies from "js-cookie";
import authStore from "../../store/authStore";


const backendUrl = 'https://tomet-backent.vercel.app/';

const doctorSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

const DrLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(doctorSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/v1/doctor/login`,
        // "http://localhost:3000/api/v1/doctor/login",
        data,
        { withCredentials: true }
      );
      authStore.getState().login(res.data.token);
      console.log(res.data.token, "doctor token");
      let message = await res.data.message;
      if (message === "Doctor logged in successfully") {
        toast.success("Doctor logged in successfully");

      
          console.log("before");
          navigate('/doctor/homepage', { replace: true });
          console.log("after");
       
        
        console.log(res.data.message);
      }
    } catch (error) {
      toast.error("Eroor while logging");
      console.log(error);
    }
  };
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
            className="text-teal-800"
          >
            Doctor Login
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
            className="bg-teal-800 pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-teal-800 hover:border-2 hover:border-teal-800 m-3"
          >
            Login
          </button>
          <p className="text-sm">
            dont have an account?{" "}
            <Link to="/doctor/register" className="text-blue-500 underline">
              Register
            </Link>
          </p>
        </Box>
      </form>
    </div>
  );
};

export default DrLogin;

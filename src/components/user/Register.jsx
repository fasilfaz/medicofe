import {
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";


const backendUrl = 'https://tomet-backent.vercel.app/';

let userSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
    phoneNumber: yup
      .string()
      .min(10)
      .max(13)
      .required("Phone number is required"),
    age: yup.number().required("Age is required"),
    gender: yup.string().required("Gender is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    image: yup.mixed().required("Image is required"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (values) => {
    const reqBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      age: values.age,
      gender: values.gender,
      bloodGroup: values.bloodGroup,
      image: values.image[0],
    };
    try {
      const res = await axios.post(
        `${backendUrl}/api/v1/user/register`,
        // "http://localhost:3000/api/v1/user/register",
        reqBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      if (res.data.message === "Register successfully") {
        toast.success("Register successfully");
        console.log(res.data);
        navigate("/user/login", { replace: true });
      } else {
        console.log(res.data.message);
      }
      navigate("/user/login");
    } catch (error) {
      toast.error("Error while registering");
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center bg-gray-100 mt-5">
          <div className="p-8 rounded-3xl shadow-custom max-w-md w-full hover:shadow-hover">
            <h2 className="text-2xl font-semibold text-center text-color mb-6">
              Register here
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("firstName")}
                  label="First name"
                  type="text"
                  focused
                  fullWidth
                />
                <TextField
                  {...register("lastName")}
                  label="Last name"
                  type="text"
                  focused
                  fullWidth
                />
              </div>
              <TextField
                {...register("email")}
                label="Email"
                type="email"
                focused
                fullWidth
              />
              <TextField
                {...register("password")}
                label="Password"
                type="password"
                focused
                fullWidth
              />
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("phoneNumber")}
                  type="text"
                  label="Phone Number"
                  focused
                  fullWidth
                />
                <TextField
                  {...register("age")}
                  label="Age"
                  type="number"
                  focused
                  fullWidth
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("gender")}
                  type="text"
                  label="Gender"
                  focused
                  fullWidth
                />
                <TextField
                  {...register("bloodGroup")}
                  type="text"
                  label="Blood Group"
                  focused
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  {...register("image")}
                  margin="dense"
                  type="file"
                  label="Upload Image"
                  focused
                  fullWidth
                />
              </div>
              <button type="submit" className="w-full bg-color py-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color ">
                Register
              </button>
            </div>
            <p className="text-sm text-center mt-4 text-gray-600">
              already register!{" "}
              <Link to="/user/login" className="text-blue-500 underline">
                login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

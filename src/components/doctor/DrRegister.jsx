import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

let doctorSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
    age: yup.number().required("Age is required"),
    gender: yup.string().required("Gender is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    specializations: yup.string().required("Specialization is required"),
    qualifications: yup.string().required("Qualification is required"),
    phoneNumber: yup.number().required("Phone number is required"),
    experiences: yup.string().required("Experiences is required"),
    fees: yup.number().min(4).required("Fees is required"),
    timings: yup.string().required("Timings is required"),
    image: yup.mixed().required("Image is required"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(doctorSchema),
  });

  const onSubmit = async (values) => {
    const reqBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      age: values.age,
      gender: values.gender,
      bloodGroup: values.bloodGroup,
      specializations: values.specializations,
      qualifications: values.qualifications,
      phoneNumber: values.phoneNumber,
      experiences: values.experiences,
      fees: values.fees,
      timings: values.timings,
      image: values.image[0],
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/doctor/register",
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
        navigate("/doctor/login", { replace: true });
      } else {
        console.log(res.data.message);
      }
      navigate("/doctor/login");
    } catch (error) {
      toast.error("Error while register");
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center bg-gray-100 mt-5">
          <div className="p-8 rounded-3xl shadow-custom max-w-md w-full hover:shadow-hover">
            <h2 className="text-2xl font-semibold text-center text-color mb-6">
              Doctor Register here
            </h2>
            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("firstName")}
                  label="First name"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  {...register("lastName")}
                  label="Last name"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <TextField
                {...register("email")}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <TextField
                {...register("password")}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("phoneNumber")}
                  type="text"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  {...register("age")}
                  label="Age"
                  type="number"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("gender")}
                  type="text"
                  label="Gender"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  {...register("bloodGroup")}
                  type="text"
                  label="Blood Group"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <TextField
                {...register("specializations")}
                type="text"
                label="Specializations"
                variant="outlined"
                fullWidth
              />
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("qualifications")}
                  type="text"
                  label="Qualifications"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  {...register("experiences")}
                  type="text"
                  label="Experiences"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  {...register("fees")}
                  type="text"
                  label="Fees"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  {...register("timings")}
                  type="text"
                  label="Time"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  {...register("image")}
                  margin="dense"
                  type="file"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <button className="w-full bg-color py-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color ">
                Register
              </button>
            </form>
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

import { Box, TextField, Typography, Grid, Container } from "@mui/material";
import { Link, useNavigate, } from "react-router-dom"

import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify";

let userSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
  phoneNumber: yup.string().min(10).max(13).required("Phone number is required"),
  age: yup.number().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  bloodGroup: yup.string().required("Blood Group is required"),
  image: yup.mixed().required("Image is required"),
}).required();

const Register = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm({resolver : yupResolver(userSchema)}
  );


  const onSubmit = async (values) => {
    const reqBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password:   values.password,
      phoneNumber: values.phoneNumber,
      age: values.age,
      gender: values.gender,
      bloodGroup: values.bloodGroup,
      image: values.image[0],
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/register", reqBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      )
       console.log(res.data);
       if(res.data.message === "Register successfully"){
        toast.success("Register successfully");
        console.log(res.data);
        navigate('/user/login' , {replace: true});
      }else{
        console.log(res.data.message);
      }
      navigate("/user/login");
    } catch (error) {
      toast.error("Error while registering");
      console.log(error)
    }
  }
  return (
    <div>
       <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
              <Box 
                width={550}
                height={550}
                flexGrow= {1}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={8}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{":hover":{
                  boxShadow: "10px 10px 20px #ccc"
                }}}
                >
                  <Grid container >
                    <Grid item lg={12} xl={12} xs={12}>
                      <Typography variant="h4" padding={3} textAlign="center" className="text-color">
                        Register here
                      </Typography>
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                        <TextField {...register("firstName")} margin="dense" type="text"  label="First name" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                       <TextField {...register("lastName")} margin="dense" type="text"  label="Last name" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                       <TextField {...register("email")} margin="dense" type="email"  label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                       <TextField {...register("password")} margin="dense" type="password"  label="Password" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                       <TextField {...register("phoneNumber")} margin="dense" type="text"  label="Phone Number" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                       <TextField {...register("age")} margin="dense" type="text"  label="Age" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                       <TextField {...register("gender")} margin="dense" type="text"  label="Gender" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} xl={6} textAlign="center">
                       <TextField {...register("bloodGroup")} margin="dense" type="text"  label="Blood Group" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} xl={12} textAlign="center">
                       <TextField {...register("image")} margin="dense" type="file"  variant="outlined" />
                    </Grid>
                  </Grid>
                  
              
              <button type="submit" className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3">
                  Register
                </button>
              <p className="text-sm">
                  already register!{" "}
                  <Link to="/user/login" className="text-blue-500 underline">
                    login
                  </Link>
              </p>
            </Box>
        </form>
       </Container>
       
   </div>
        
  )
}

export default Register;
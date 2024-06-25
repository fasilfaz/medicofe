import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import dotenv from "dotenv";
dotenv.config();

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const serviceSchema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    image: yup.mixed().required(),
  })
  .required();

const ServiceUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(serviceSchema) });
  useEffect(() => {
    const getService = async () => {
      try {
        let res = await axios
          .get(
            `${backendUrl}/api/v1/admin/get-servicesbyid/${id}`
            // `http://localhost:3000/api/v1/admin/get-servicesbyid/${id}`
            , {
            withCredentials: true,
          })
          // .then((res) => {
          //   const data = res.data.service;
          //   const { title, description } = data;
          //   setValue("title", title);
          //   setValue("description", description);
          // });

        // const data = await res.data;
        // setServices(data)
        // console.log("service:", data);
        // setService(res.data.service)
      } catch (error) {
        console.error(error);
      }
    };
    getService();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      // const res = await axios.put(
      //   `http://localhost:3000/api/v1/admin/update-services/${id}`,
      //   reqBody,
      //   {
      //     withCredentials: true,
      //   //   headers: {
      //   //     "Content-Type": "multipart/form-data",
      //   //   },
      //   }
      // );
      // const data = await res.data;
      // if (dataa === "service updated") {
      //   window.location.reload();
      // }
      // navigate("/admin/services-card");
      console.log(data, "gggggg");
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(d => console.log(d))}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={14}
          borderRadius={8}
          padding={2}
          paddingTop={2}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h4" textAlign="center" className="text-color">
            Update Service
          </Typography>
          <TextField
            {...register("title")}
            margin="normal"
            type="text"
            label="Title"
            variant="outlined"
          />
          {errors.title && <p>{errors.title.message}</p>}
          <TextField
            {...register("description")}
            margin="normal"
            type="text"
            label="Description"
            variant="outlined"
          />
          {errors.description && <p>{errors.description.message}</p>}
          <div>
            <button
              type="submit"
              className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl
                 text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3"
            >
              Update
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default ServiceUpdate;

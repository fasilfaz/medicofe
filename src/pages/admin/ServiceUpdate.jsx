import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


const serviceSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    image: yup.mixed().required(),
}).required();

const ServiceUpdate = () => {
    const navigate = useNavigate();
    const [ services, setServices] = useState([]);

    useEffect(() => {
        const getAllServices = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3000/api/v1/admin/get-services",
                );
                const data = await res.data;
                console.log("servi", data);
                setServices(data);
            } catch (error) {
                console.error(error);
            }
        };
        getAllServices();
    },[]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useForm ({ resolver: yupResolver( serviceSchema )});

    const onSubmit = async (data) => {
        const reqBody = {
            title: data.title,
            description: data.description,
            image: data.image[0],
        };

        const res = await axios.put(
            `http://localhost:3000/api/v1/admin/update-services/${services._id}`,
            reqBody,
            {
                withCredentials: true,
            }
        );
        const dataa = await res.data;
        if (dataa === "service updated"){
            window.location.reload();
        }
        navigate("/admin/services-card");
        console.log(dataa);
        
    };
  return (
    <div>
        {services &&
        services.map((service, index)=> (
            <div key={index}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex"
                flexDirection={"column"}
                maxWidth={400}
                alignItems={"center"}
                justifyContent={"center"}
                margin="auto"
                marginTop={14}
                borderRadius={8}
                padding={2} 
                paddingTop={2}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{":hover":{
                boxShadow: "10px 10px 20px #ccc"
                }}}>
                    <Typography variant="h4" textAlign="center"className="text-color" >
                        Update Service
                    </Typography>
                    <TextField {...register("title")} margin="normal" type="text" label="Title" variant="outlined"/>
                    {errors.title && <p>{errors.title.message}</p>}
                    <TextField {...register("description")} margin="normal" type="text" label="Description" variant="outlined"/>
                    {errors.description && <p>{errors.description.message}</p>}
                    <TextField {...register("image")} margin="normal" type="file" variant="outlined"/>
                    {errors.image && <p>{errors.image.message}</p>}
                    <div>
                        
                        <button  type="submit" className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3"
                        >
                        Update
                        </button>
                        
                        
                    </div>
                    
            </Box>
            </form>
        </div>
        ))}
        
    </div>
  )
}

export default ServiceUpdate
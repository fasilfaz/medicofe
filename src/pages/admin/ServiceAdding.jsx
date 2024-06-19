import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";


const serviceSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    image: yup.mixed().required(),
}).required();

export default function ServiceAdding () {
 
    const navigate = useNavigate();
    const {id} = useParams();
    const isEdit = Boolean(id);

    const getId = async () => {
        if (!isEdit) return;
        try {
            let res = await axios.get(`http://localhost:3000/api/v1/admin/get-servicesbyid/${id}`);
            console.log(res.data);
            let formValue = res.data.data;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{getId()},[id]);
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
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/admin/add-services",
                reqBody,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            navigate("/admin/services-card");
            console.log("service added",res.data);
        } catch (error) {
            console.error("error adding services", error)
        }
    };

    return (
       
        <>
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
                        {isEdit? "Edit Service" : "Add Service"}
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
                         {isEdit? "Update" : "Submit"}
                        </button>
                        
                        
                    </div>
                    
            </Box>
            </form>

        </>
    )
}
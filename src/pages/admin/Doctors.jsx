
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

const backendUrl = process.env.REACT_APP_BACKEND_URL;


export const Doctors = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
             
            const res = await axios.get(
                `${backendUrl}/api/v1/admin/getAllDrs`,
                // "http://localhost:3000/api/v1/admin/getAllDrs",
                 {
                withCredentials: true
            });
            const data = await res.data;
            console.log(data);
            setUsers(data);
        };
        getUsers();
    },[]);

    const handleRemove = async (id) => {
        const res = await axios.delete(
            `${backendUrl}/api/v1/admin/removeDrs/${id}`,
            // `http://localhost:3000/api/v1/admin/removeDrs/${id}`,
            {
            withCredentials: true
        })
        console.log(id);
        const data = await res.data;
        if (data.message === "doctor deleted"){
            setUsers(users.filter(user => user._id !== id));
        }
    };

    const columns = [
        {
            name: "firstName",
            label: "First Name",
            options: {
                customBodyRender: (value) => <p className="capitalize">{value}</p>,
            },
        },
        {
            name: "lastName",
            label: "Last Name",
        },
        {
            name: "email",
            label: "Email",
        },
        {
            name: "phoneNumber",
            label: "Phone Number",
        },
        {
            name: "age",
            label: "Age",
        },
        {
            name: "gender",
            label: "Gender",
            options: {
                customBodyRender: (value) => <p className={`capitalize px-3 py-1 inline-block rounded-full ${
                    value === "male"? "bg-blue-500 text-white" :
                    value === "female"? "bg-pink-500 text-white" :
                    "bg-yellow-500 text-white"
                }`}>{value}</p>,
            },
        },
        {
            name: "qualifications",
            label: "Qualification",
            options: {
                customBodyRender: (value) => <p className="capitalize">{value}</p>,
            },
        },
        {
            name: "specializations",
            label: "Specialization",
            options: {
                customBodyRender: (value) => <p className="capitalize">{value}</p>,
            },
        },
        {
            name: "fees",
            label: "Fee",
        },
        {
            name: "timings",
            label: "Time",
        },
        {
            name: "experiences",
            label: "Experience",
            options: {
                customBodyRender: (value) => <p className="capitalize">{value}</p>,
            },
        },
        {
            name: "bloodGroup",
            label: "Blood Group",
            options: {
                customBodyRender: (value) => <p className="capitalize">{value}</p>,
            },
        },
        {
            name: "remove",
            options: {
                customBodyRender: (value, tableMeta) => (
                    <button  onClick={() => handleRemove(users[tableMeta.rowIndex]._id)}
                     className="bg-rose-600 px-3 py-1 inline-block rounded-full text-white ">
                                remove
                    </button>
                ),
                filter: false,
            },
        },
        
    ];


       
       const options = {
         selectableRows: false,
         elevation: 0,
         rowsPerPage: 5,
         rowsPerPageOptions: [5, 10, 20, 30],
       };

       const getMuiTheme = () => createTheme({
        typography: {
            fontFamily: "Poppins, sans-serif",
         
        },
        palette: {
            background: {
                paper: "#f3f4f6",
                default: "#f3f4f6",
            },
        },
        components: {
            MuiTableCell:{
                styleOverrides:{
                    head:{
                        paddingLeft:'25px',
                        paddingRight:'15px',
                        color: "#58595b",
                        fontWeight: "bold",
                    },
                    body:{
                        paddingLeft:'25px',
                        paddingRight:'15px',
                        color: "#58595b"
                    }
                }
            }
        }
       })

  return (
    <div className="min-h-screen grid place-items-center">
        <div className="w-[1090px]">
            <ThemeProvider theme={getMuiTheme}>
                <MUIDataTable
                title={"Doctors List"}
                data={users}
                columns={columns}
                options={options}
                />
            </ThemeProvider>
        
        </div>
    </div>
  )
}


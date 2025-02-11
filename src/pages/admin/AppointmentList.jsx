
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios";
import { format } from "date-fns";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";


const backendUrl = 'https://tomet-backent.vercel.app';


const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const columns = [
        {
            name: "appointmentDate",
            label: "Date",
         
        },
        {
            name: "userFName",
            label: "First Name",
            options: {
                customBodyRender: (value) => <p className="capitalize">{value}</p>,
            },
        },
        {
            name: "userLName",
            label: "Last Name",
        },
    
        {
            name: "userPhoneNumber",
            label: "Phone Number",
        },
        {
            name:"doctorFName",
            label: "Doctor First Name",
            // options: {
            //     customBodyRender: (value) => <p className="capitalize">{value.firstName} {value.lastName}</p>,
            // },
        },
        {
            name: "doctorLName",
            label: "Doctor Last Name",
        }
     
     
        
      
        // {
        //     name: "remove",
        //     options: {
        //         customBodyRender: (value, tableMeta) => (
        //             <button className="bg-rose-600 px-3 py-1 inline-block rounded-full text-white "
        //             onClick={ () => handleRemove(tableMeta.rowIndex)}>
        //              remove
        //             </button>
        //         ),
        //         filter: false,
        //     },
        // },
        
    ];
    useEffect(() => {
        const getUsers = async () => {
             
            const res = await axios.get(
                `${backendUrl}/api/v1/admin/getAppointment`,
                // "http://localhost:3000/api/v1/admin/getAppointment"
                );
            const data = await res.data;
            console.log(data);
            setAppointments(data);
        };
        getUsers();
    },[]);


    // const handleRemove = async (rowIndex) => {
    //     const userId = users[rowIndex].id;
    //     try {
    //         await axios.delete();
    //         const updatedUsers = [...users];
    //         updatedUsers.splice(rowIndex, 1);
    //         setUsers(updatedUsers);
    //         console.log("User deleted successfully");
    //     } catch (error) {
    //         console.error("Error deleting user:", error);
    //     }
    // }
       
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
                        padding: "10px 1px",
                    },
                    body:{
                        padding: "10px 20px",
                        color: "#58595b"
                    }
                }
            }
        }
       })

  return (
    <div className="py-10 min-h-screen grid place-items-center">
        <div className="max-w-10xl">
            <ThemeProvider theme={getMuiTheme}>
                <MUIDataTable
                title={"Appointment List"}
                data={appointments}
                columns={columns}
                options={options}
                />
            </ThemeProvider>
        
        </div>
    </div>
  )
}

export default AppointmentList;
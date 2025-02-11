// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// // const backendUrl = 'https://tomet-backent.vercel.app';

// const Logout = () => {
//  
//       
//   
//   //

//   //   const onSubmit = async (data) => {
//   //     try {
//   //     const res = await axios.post(
//   //       // `${backendUrl}/api/v1/user/logout`,
//   //       "http://localhost:3000/api/v1/user/logout",
//   //       data,{withCredentials:true},)
//   //     if(res.data.message === "logged out"){
//   //       toast.success("log out successfully")
//   //       navigate("/user/login" , {replace: true});
//   //     }else{
//   //       console.log(res.data.message);
//   //     }
//   //     } catch (error) {
//   //       toast.error("Error while logging out")
//   //       console.log(error,"error");
//   //     }
//   //   };
//   //   onSubmit();
//   return <div>
//   <button onClick={handleLogout}>Logout</button>
// </div>
// ;
// };

// export default Logout;


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../../store/authStore.js";
import { toast } from "react-toastify";


const Logout = () => {
   const navigate = useNavigate();
   useEffect(() => {
      authStore.getState().logout();
      navigate("/user/login", {replace: true});
      toast.info("log out");
   }, [navigate]);
  return (
    <div>
      {/* Logout */}
      </div>
  )
};
export default Logout;


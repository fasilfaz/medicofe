import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



const Logout = () => {

  const navigate = useNavigate();


  const onSubmit = async (data) => {
    try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/user/logout",
      data,{withCredentials:true},)
    if(res.data.message === "logged out"){
      toast.success("log out successfully")
      navigate("/user/login" , {replace: true});
    }else{
      console.log(res.data.message);
    }
    } catch (error) {
      toast.error("Error while logging out")
      console.log(error,"error");
    }
  };
  onSubmit();
  return (
     <div>
     
       {/* <form onSubmit={handleSubmit(onSubmit)}>
             <button  type="submit" className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3">
                Login
             </button>
      </form> */}
     </div>
  )
}

export default Logout
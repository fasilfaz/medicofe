import { useEffect } from "react";
import authStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";




const CheckAuth = ( { children } ) => {
    const navigate = useNavigate();
    try {
        
        const { checkAuth } = authStore();
        useEffect( () => {
            checkAuth();
        },[checkAuth]);
      return children;
    } catch (error) {
        navigate("/user/login", {replace: true});
    }
   
}

export default CheckAuth
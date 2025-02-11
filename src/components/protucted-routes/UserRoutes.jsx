import axios from "axios";
import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import Cookies from "js-cookie";


const backendUrl = 'https://medicoba.vercel.app';

const UserRoutes = ({children}) => {
    const navigate = useNavigate();
    const token = Cookies.get("token");
    console.log(token);

    useEffect(() => {
        const checkUser = async ( ) => {
            try {
                const res = await axios.get(
                    `${backendUrl}/api/v1/user/check-user`,
                    // "http://localhost:3000/api/v1/user/check-user",
                    {
                        withCredentials: true,
                    },
                );
                const data = res.data;
                console.log(data);
                if (data.success === false) {
                    navigate("/user/register", { replace: true });
                }
            } catch (error) {
                console.error("Error occurred while checking user", error);
                navigate("/user/register", { replace: true });
            }
        };
        checkUser();
    },[navigate]);
    return children;
}

export default UserRoutes;
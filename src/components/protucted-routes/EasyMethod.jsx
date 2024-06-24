import Cookies from "js-cookie";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../recoil/tokenAtom";
const EasyMethod = ({ children}) => {
    const [token, setToken] = useRecoilState(tokenState);
    const navigate = useNavigate();
    // const token =  Cookies.get("token");
    console.log(token, "tokken");
    // useEffect(() => {
    //     if(token === undefined || token === null){
    //         navigate("/user/login");
    //     }
    // },[navigate, token]);
    // return children;
    if (token === undefined) {
        navigate("/user/login", {replace: true});
    }
    return children;
}

export default EasyMethod;
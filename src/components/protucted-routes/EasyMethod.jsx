// import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { tokenState } from "../../recoil/tokenAtom";
const EasyMethod = ({ children }) => {
  // const [token, setToken] = useRecoilState(tokenState);
  const navigate = useNavigate();
  // const token =  Cookies.get("token");
  const token = localStorage.getItem("token");
  console.log(token, "localstorage");
  useEffect(() => {
    if (token === undefined || token === null) {
      navigate("/user/login", { replace: true });
    }
  }, [navigate, token]);
  return children;
};

export default EasyMethod;

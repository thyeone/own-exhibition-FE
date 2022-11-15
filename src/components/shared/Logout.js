import { useNavigate } from "react-router-dom";

const Logout = () => {
  localStorage.clear();
  window.location.replace("/");
};

export default Logout;

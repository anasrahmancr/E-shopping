import React from "react";
import customAxios from "../../services/axiosCall";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function handleLogout(e) {
    try {
      e.preventDefault();
      const api = customAxios();
      api.get("/user/logout",{withCredentials: true}).then((response) => {
        if (response.data.success) {
          navigate("/");
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <header className="flex justify-between m-4">
        <div className="header-left flex">
          <div className="pr-8 pl-6">HOME</div>
          <div>ABOUT</div>
        </div>
        <div className="header-right flex">
          <div className="pr-8">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

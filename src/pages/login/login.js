import "./login.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MAIN_URL } from "../../utils/consts";

export const Login = () => {
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/user/2")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="login">
      <div className="title">
        <span>СНТ Наука-1</span>
      </div>
      <div className="login_field">
        <span>Login</span>
        <input />
      </div>
      <div className="password_field">
        <span>Password</span>
        <input />
      </div>
      <div className="buttons">
        <div className="login_button">Login</div>
        <div className="register_button">Register</div>
      </div>
    </div>
  );
};

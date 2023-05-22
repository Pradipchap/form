import React from "react";
import logo from "../osmLogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar  flex justify-between h-20 shadow-lg text-black bg-formbg items-center ">
      <div className="logo ">
        <img src={logo} alt="" className="w-44 h-28" />
      </div>

      <ul className="flex items-center w-[50%] max-md:w-[60%] max-sm:w-[80%] justify-between px-5 ">
        <li className="text-md font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-md font-bold">
          <Link to="/team">Teams</Link>
        </li>
        <li className="text-md font-bold">
          <Link to="/preevents">preevents</Link>
        </li> 
        <li className="register bg-btn py-2 px-2 text-white font-bold rounded-[6px] shadow-lg">
          <Link to="/redirect">Register Now</Link>
        </li>
      </ul>
    </div>
  );
};

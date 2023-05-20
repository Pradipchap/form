import React from "react";
import logo from "../osmLogo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar  flex justify-between h-20 shadow-lg bg-formbg  ">
      <div className="logo ">
        <img src={logo} alt="" className="h-full w-40 overflow-visible" />
      </div>

      <ul className="flex items-center w-[40%] justify-between px-5 ">
        <li className="text-md font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-md font-bold">
          <Link to="/team">Teams</Link>
        </li>
        <li className="text-md font-bold">
          <Link to="/preevents">Pre-Events</Link>
        </li> 
        <li className="register bg-btn py-2 px-2 text-white font-bold rounded-[6px] shadow-lg">
          <Link to="/form">Register Now</Link>
        </li>
      </ul>
    </div>
  );
};

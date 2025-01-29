import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/imgs/freshcart-logo.svg";
import { NavLink } from "react-router-dom";
import Register from './../register/register';
export default function Navbar() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 p-2 shadow-md bg-main-light flex justify-between items-center">
        <div className="flex" >
          <img src={logo} width={150} alt="" />
          <ul className="flex ms-4">
            <li className="mx-2 flex items-center text-sm text-slate-950 font-normal"><NavLink to={'/'}>Home</NavLink> </li>
            <li className="mx-2 flex items-center text-sm text-slate-950 font-normal"><NavLink to={'/cart'}>Cart</NavLink></li>
            <li className="mx-2 flex items-center text-sm text-slate-950 font-normal"><NavLink to={'/about'}>About</NavLink> </li>
            <li className="mx-2 flex items-center text-sm text-slate-950 font-normal"><NavLink to={'/brands'}>Brands</NavLink></li>
          </ul> 
        </div>
        <div className="" >
        <ul className="flex ms-4">
            <li className="mx-2 flex items-center text-sm text-slate-950 font-normal"><NavLink to={'/register'}>Register</NavLink> </li>
            <li className="mx-2 flex items-center text-sm text-slate-950 font-normal"><NavLink to={'/login'}>Login</NavLink></li>
            <li className="mx-2 flex items-center text-sm text-slate-950 font-normal"><NavLink to={'/brands'}>Brands</NavLink>
            
            </li>
          </ul> 
        </div>
      </nav>
    </>
  );
}

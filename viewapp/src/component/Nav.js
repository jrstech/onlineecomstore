import React from "react";
import { Link, json, useNavigate, NavLink } from "react-router-dom";

const Nav = () => {
  const naviagte = useNavigate();
  const auth = localStorage.getItem("user");
  const logoutUser = () => {
    localStorage.clear();
    naviagte("/signup");
  };
  return (
    <div className="d-flex">
     
      {auth ? (
        <ul className="navlink d-flex">
          <> <img className="logo" src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/news/fi/mart1000x562-59b99f247b.jpg"  alt="loading"/></>
          <li>
            <NavLink to="">Home </NavLink>
          </li>
          <li>
            <NavLink to="/productlist"> Product listing</NavLink>
          </li>
          <li>
            <NavLink to="/addproductlisting"> Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/update"> Update Product</NavLink>
          </li>
          <li>
            <NavLink to="/profile"> Profile Component</NavLink>
          </li>
          <li>
            <NavLink onClick={logoutUser} to="/signup">
              {" "}
              Logout
              &nbsp;
              ( {JSON.parse(auth).name} )
             
            </NavLink>{" "}
          </li>
        </ul>
      ) : (
        <ul className="navlink textset">
          <li className="">
            <NavLink to="/signup"> Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login"> Login</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

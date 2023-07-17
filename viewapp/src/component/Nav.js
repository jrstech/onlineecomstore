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
          <>
            {" "}
            <img
              className="logo"
              src="https://static.vecteezy.com/system/resources/previews/009/027/322/original/jrs-logo-jrs-letter-jrs-letter-logo-design-initials-jrs-logo-linked-with-circle-and-uppercase-monogram-logo-jrs-typography-for-technology-business-and-real-estate-brand-vector.jpg"
              alt="loading"
            />
          </>

          <li>
            <NavLink className="navlinkstyle mx-2" to="">
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinkstyle" to="/productlist">
              {" "}
              Product listing
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinkstyle" to="/addproductlisting">
              {" "}
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinkstyle" to="/update">
              {" "}
              Update Product
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinkstyle" to="/profile">
              {" "}
              Profile Component
            </NavLink>
          </li>
          <li className="logoutstyle">
            <NavLink
              className="navlinkstyle "
              style={{ justifyContent: "end" }}
              onClick={logoutUser}
              to="/signup"
            >
              {" "}
              User: &nbsp; {JSON.parse(auth).name} &nbsp;  Logout 
            </NavLink>{" "}
          </li>
        </ul>
      ) : (
        <ul className="navlink textset">
          <li className="">
            <NavLink className="navlinkstyle" to="/signup">
              {" "}
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinkstyle" to="/login">
              {" "}
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

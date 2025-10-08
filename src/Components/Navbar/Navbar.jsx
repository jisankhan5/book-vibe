import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 text-xl text-white  btn-primary  btn">Home</li>
      </Link>
      <Link to="/about">
        <li className="m-2 text-xl text-white  btn-primary  btn">About</li>
      </Link>
      <Link to="/readList">
        <li className="m-2 text-xl text-white  btn-primary  btn">ReadList</li>
      </Link>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-3 text-white bg-[#23BE0A] rounded-lg">Sign In</a>
        <a className="btn text-white bg-[#59C6D2] rounded-lg">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;

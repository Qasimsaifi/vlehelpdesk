import React from "react";
import { CgClose, CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className="navbar border-gray-400 border-b-2 bg-gray-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="my-drawer" className="text-4xl text-black">
              <CgMenuLeft/>
            </label>
          </div>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12">
              <img src="/mudra.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

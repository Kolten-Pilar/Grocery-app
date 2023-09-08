import React from "react";
import {
  FaDoorClosed,
  FaUserSlash,
  FaUser,
  FaUserPlus,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between items-center pr-5 mt-14 border-2 border-black rounded-xl bg-blue-700 text-white font-semibold">
      <div className=" pl-3">
        <Link to="/" className="flex items-center">
          Grocery List
        </Link>
      </div>
      <div className=" pl-16">K. Pilar | © 2023</div>
      <ul className="flex items-center justify-between">
        <li className=" ml-5">
          <Link
            className=" text-white font-semibold flex items-center justify-center py-4 pr-4"
            to="/"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            {" "}
            <FaArrowAltCircleUp /> Back to Top{" "}
          </Link>
        </li>

        {/* <li className=" ml-5 py-4">
              <Link to="/login" className="flex items-center">
                <FaUser /> Login
              </Link>
            </li>
            <li className=" ml-5 py-4">
              <Link to="/register" className="flex items-center">
                <FaUserPlus /> Register
              </Link>
            </li> */}
      </ul>
    </footer>
  );
}

export default Footer;

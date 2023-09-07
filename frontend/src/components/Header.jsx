import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


function Header() {
 

  return (
    <header className="flex justify-between items-center pr-5 mb-14 border-2 border-black rounded-xl bg-blue-700 text-white font-semibold">
      <div className=" pl-3">
        <Link to="/" className="flex items-center">Grocery List</Link>
      </div>
      <ul className="flex items-center justify-between">
        {/* Using a ternary below when login functionality is added. Checks for user before showing logout button */}
        {/* {user ? ( */}
           <li className=" ml-5">
             <button className=" text-white font-semibold flex items-center justify-center" >
               <FaSignOutAlt /> Logout
             </button>
           </li>
        {/* ) : ( */}
          <>
            <li className=" ml-5 py-4">
              <Link to="/login" className="flex items-center">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li className=" ml-5 py-4">
              <Link to="/register" className="flex items-center">
                <FaUser /> Register
              </Link>
            </li>
          </>
        {/* )} */}
      </ul>
    </header>
  );
}

export default Header;

import React from "react";
import { FaDoorClosed, FaUserSlash, FaUser, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); 
 
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }

  return (
    <header className="flex justify-between items-center pr-5 mb-14 border-2 border-black rounded-xl bg-blue-700 text-white font-semibold">
      <div className=" pl-3">
        <Link to="/" className="flex items-center">Grocery List</Link>
      </div>
      <ul className="flex items-center justify-between">
        {/* Using a ternary below when login functionality is added. Checks for user before showing logout button */}
        {user ? (
           <li className=" ml-5 py-4">
             <button className=" text-white font-semibold flex items-center justify-center" onClick={onLogout} >
               <FaUserSlash /> Logout
             </button>
           </li>
         ) : ( 
          <>
            <li className=" ml-5 py-4">
              <Link to="/login" className="flex items-center">
                <FaUser /> Login
              </Link>
            </li>
            <li className=" ml-5 py-4">
              <Link to="/register" className="flex items-center">
                <FaUserPlus /> Register
              </Link>
            </li>
          </>
         )} 
      </ul>
    </header>
  );
}

export default Header;

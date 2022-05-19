import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
   const [user] = useAuthState(auth);

   const logOut = () => {
      signOut(auth);
      localStorage.removeItem("accessToken");
   };
   const menuItems = (
      <>
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/about">About</NavLink>
         </li>
         <li>
            <NavLink to="/appointment">Appointment</NavLink>
         </li>
         <li>
            <NavLink to="/reviews">Reviews</NavLink>
         </li>
         <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
         </li>
         {user && (
            <li>
               <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
         )}

         <li>
            {user ? (
               <button onClick={logOut}>Logout</button>
            ) : (
               <NavLink to="/login">Login</NavLink>
            )}
         </li>
      </>
   );

   return (
      <div id="header" className="sticky top-0 bg-[#f0f0f0] z-50">
         <div className="container mx-auto">
            <div className="navbar justify-between">
               <label
                  for="dashboard-drawer"
                  class="btn btn-ghost drawer-button lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <div className="">
                  <Link to="/" className="normal-case text-xl">
                     Doctors portal
                  </Link>
               </div>
               <div className="hidden lg:flex">
                  <ul className="menu menu-horizontal p-0 primary-focus gap-2">
                     {menuItems}
                  </ul>
               </div>
               <div className="dropdown lg:hidden">
                  <label tabIndex="0" className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </label>
                  <ul
                     tabIndex="0"
                     className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0"
                  >
                     {menuItems}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;

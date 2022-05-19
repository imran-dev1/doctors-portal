import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
   return (
      <div className="mx-auto py-16" style={{ maxWidth: "1150px" }}>
         <div class="drawer drawer-mobile py-5 h-auto">
            <input
               id="dashboard-drawer"
               type="checkbox"
               class="drawer-toggle"
            />
            <div class="drawer-content p-4 pt-0 pl-10">
               <h2 className="text-3xl mb-5">My dashboard</h2>
               <Outlet></Outlet>
            </div>
            <div class="drawer-side">
               <label for="dashboard-drawer" class="drawer-overlay"></label>
               <ul class="menu p-4 overflow-y-auto w-48 bg-slate-200 text-base-content rounded-lg gap-2">
                  <li>
                     <Link to="/dashboard">My Appointments</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/add-doctor">Add new doctor</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/users">Users</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;

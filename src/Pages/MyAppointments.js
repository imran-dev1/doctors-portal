import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import auth from "../firebase.init";

const MyAppointments = () => {
   const [user] = useAuthState(auth);
   const navigate = useNavigate();

   const { data: appointments, isLoading } = useQuery("appointments", () =>
      fetch(`http://localhost:4000/appointment?email=${user.email}`, {
         method: "GET",
         headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         },
      }).then((res) => {
         if (res.status === 401 || res.status === 403) {
            navigate("/");
         }
         return res.json();
      })
   );

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <div>
         <h2 className="mb-3 text-xl">My appointments</h2>
         <div class="overflow-x-auto pb-5">
            <table class="table table-compact w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Service</th>
                     <th>Date</th>
                     <th>Time</th>
                  </tr>
               </thead>
               <tbody>
                  {appointments?.map((appointment, index) => (
                     <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{appointment.service}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div>
            <div class="btn-group">
               <button class="btn btn-sm bg-white hover:bg-primary hover:border-slate-200 hover:text-white border-slate-200 text-black">1</button>
               <button class="btn btn-sm bg-white hover:bg-primary hover:border-slate-200 hover:text-white border-slate-200 text-black ">2</button>
               <button class="btn btn-sm bg-white hover:bg-primary hover:border-slate-200 hover:text-white border-slate-200 text-black">3</button>
               <button class="btn btn-sm bg-white hover:bg-primary hover:border-slate-200 hover:text-white border-slate-200 text-black">4</button>
            </div>
         </div>
      </div>
   );
};

export default MyAppointments;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyAppointments = () => {
   const [appointments, setAppointments] = useState([]);
   const [user] = useAuthState(auth);

   const navigate = useNavigate();

   useEffect(() => {
      fetch(`http://localhost:4000/appointment?email=${user.email}`, {
         method: "GET",
         headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         },
      })
         .then((res) => {
            if (res.status === 401 || res.status === 403) {
               navigate("/");
            }
            return res.json();
         })
         .then((data) => setAppointments(data));
   }, [appointments]);

   return (
      <div>
         <div class="overflow-x-auto">
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
                     <tr>
                        <th>{index + 1}</th>
                        <td>{appointment.service}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyAppointments;

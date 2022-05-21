import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const AvailableService = ({ service, setAppointment }) => {
   const [user] = useAuthState(auth);
   const { name, available } = service;
   const location = useLocation();
   const navigate = useNavigate();
   const handleBook = (service) => {
      if (user) {
         setAppointment(service);
      } else {
         navigate("/login", { state: { from: location } });
      }
   };
   return (
      <div className="text-center shadow-lg p-4 rounded-xl border shadow-slate-200 bg-white">
         <h2 className="text-secondary text-lg font-medium mb-2">{name}</h2>
         <p className=" mb-2">{available.length ? available[0] : "Try another date"}</p>
         <p className=" mb-5">
            {available.length} {available.length > 0 ? "slots" : "slot"} available
         </p>
         <label
            onClick={() => handleBook(service)}
            htmlFor="booking-modal"
            className={`btn btn-primary ${
               available.length
                  ? "bg-gradient-to-r from-secondary to-primary text-white"
                  : "bg-slate-50 text-slate-800 hover:bg-slate-50 border-0"
            }`}
            disabled={available.length === 0 ? true : false}
         >
            Book Appointment
         </label>
      </div>
   );
};

export default AvailableService;

import userEvent from "@testing-library/user-event";
import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AppointmentModal = ({ appointment, date, setAppointment }) => {
   const { _id, name, slots } = appointment;
   const [user] = useAuthState(auth);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const handleBook = (data) => {
      const { patient_name, email, phone, time } = data;
      const appointment = {
         date: format(date, "PP"),
         time,
         service: name,
         service_id: _id,
         patient_name,
         email,
         phone,
      };

      fetch("http://localhost:4000/service", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(appointment),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               reset();
               setAppointment(null);
               toast.success("You have booked a slot!");
            }
         });
   };

   return (
      <>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
               <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
               >
                  ✕
               </label>
               <h3 className="font-bold text-lg text-secondary">{name}</h3>
               <form
                  onSubmit={handleSubmit(handleBook)}
                  className="py-4 grid grid-cols-1 gap-2"
               >
                  <input
                     className="input input-bordered w-full"
                     type="text"
                     value={format(date, "PP")}
                     disabled
                  />

                  <select
                     {...register("time", { required: true })}
                     className="select select-bordered w-full"
                  >
                     <option value="">Select time</option>
                     {slots.map((slot, index) => (
                        <option key={index} value={slot}>
                           {slot}
                        </option>
                     ))}
                  </select>
                  {errors.time?.type === "required" && (
                     <p className="text-red-400 text-sm">
                        Please select one slot!
                     </p>
                  )}
                  <input
                     {...register("patient_name", { required: true })}
                     className="input input-bordered w-full"
                     type="text"
                     placeholder="Full Name"
                  />
                  {errors.patient_name?.type === "required" && (
                     <p className="text-red-400 text-sm">
                        Please enter your full name!
                     </p>
                  )}
                  <input
                     {...register("email", {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                     })}
                     className="input input-bordered w-full"
                     type="text"
                     placeholder="Email"
                  />
                  {errors.email?.type === "required" && (
                     <p className="text-red-400 text-sm">
                        Please enter your email!
                     </p>
                  )}
                  {errors.email?.type === "pattern" && (
                     <p className="text-red-400 text-sm">
                        Please enter valid email address!
                     </p>
                  )}
                  <input
                     {...register("phone", {
                        required: true,
                        pattern: /^[0-9]*$/,
                     })}
                     className="input input-bordered w-full"
                     type="text"
                     placeholder="Phone Number"
                  />
                  {errors.phone?.type === "required" && (
                     <p className="text-red-400 text-sm">
                        Please enter your phone number!
                     </p>
                  )}
                  {errors.phone?.type === "pattern" && (
                     <p className="text-red-400 text-sm">
                        Please enter valid phone number!
                     </p>
                  )}

                  <input
                     type="submit"
                     value="Book"
                     className="btn btn=primary text-white"
                  />
               </form>
            </div>
         </div>
      </>
   );
};

export default AppointmentModal;

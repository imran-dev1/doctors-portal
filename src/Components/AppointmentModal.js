import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ appointment, date, setAppointment }) => {
  const { _id, name, slots } = appointment;

  const handleBook = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setAppointment(null);
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
          <form onSubmit={handleBook} className="py-4 grid grid-cols-1 gap-2">
            <input
              name="date"
              className="input input-bordered w-full"
              type="text"
              value={format(date, "PP")}
              disabled
            />
            <select className="select select-bordered w-full" name="slot">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              className="input input-bordered w-full"
              type="text"
              placeholder="Full Name"
            />
            <input
              name="phone"
              className="input input-bordered w-full"
              type="text"
              placeholder="Phone Number"
            />
            <input
              name="email"
              className="input input-bordered w-full"
              type="email"
              placeholder="Email"
            />
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

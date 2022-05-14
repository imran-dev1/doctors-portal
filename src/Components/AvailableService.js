import React from "react";

const AvailableService = ({ service, setAppointment }) => {
  const { name, slots } = service;
  return (
    <div className="text-center shadow-lg p-4 rounded-xl border shadow-slate-200 bg-white">
      <h2 className="text-secondary text-lg font-medium mb-2">{name}</h2>
      <p className=" mb-2">{slots.length ? slots[0] : "Try another date"}</p>
      <p className=" mb-5">
        {slots.length} {slots.length > 0 ? "slots" : "slot"} available
      </p>
      <label
        onClick={() => setAppointment(service)}
        htmlFor="booking-modal"
        className={`btn btn-primary ${
          slots.length
            ? "bg-gradient-to-r from-secondary to-primary text-white"
            : "bg-slate-50 text-slate-800 hover:bg-slate-50 border-0"
        }`}
        disabled={slots.length === 0 ? true : false}
      >
        Book Appointment
      </label>
    </div>
  );
};

export default AvailableService;

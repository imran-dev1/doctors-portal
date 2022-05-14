import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AvailableService from "./AvailableService";

const AvailableServices = ({ date }) => {
  const [services, setServices] = useState([]);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="px-4 lg:px-10 py-20">
      <h2 className="text-secondary text-2xl text-center">
        Available Appointments on{" "}
        <span className="font-medium">{format(date, "PP")}</span>
      </h2>
      <div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-10 mx-auto"
        style={{ maxWidth: "1150px" }}
      >
        {services.map((service) => (
          <AvailableService
            key={service._id}
            service={service}
            setAppointment={setAppointment}
          ></AvailableService>
        ))}
      </div>
      {appointment && (
        <AppointmentModal
          appointment={appointment}
          date={date}
          setAppointment={setAppointment}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableServices;

import React, { useState } from "react";
import AppointmentBanner from "../Components/AppointmentBanner";
import AvailableServices from "../Components/AvailableServices";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableServices  date={date}></AvailableServices>
    </>
  );
};

export default Appointment;

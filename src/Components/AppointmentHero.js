import React from "react";
import PrimaryButton from "./Shared/PrimaryButton";
import doctor from "../assets/images/doctor.png";
import appointmentBg from "../assets/images/appointment.png";

const AppointmentHero = () => {
  return (
    <div className="my-40"
      id="appointment-hero"
      style={{ backgroundImage: `url(${appointmentBg})` }}
    >
      <div className="container mx-auto">
        <div className="hero">
          <div className="hero-content flex-col gap-10 lg:flex-row lg:gap-20 p-0">
            <img
              src={doctor}
              className=" hidden lg:flex flex-1 rounded-lg object-cover -mt-32"
              alt=""
              style={{ maxHeight: "500px" }}
            />
            <div className="flex-1 text-white p-5 md:p-10">
              
              <h3 className="text-lg font-bold text-secondary uppercase">
              Appointment
              </h3>
              <h1 className=" text-4xl lg:text-3xl font-bold">
              Make an appointment Today
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;

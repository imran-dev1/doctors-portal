import React from "react";
import appointmentBg from "../assets/images/appointment.png";

const HomeContact = () => {
  return (
    <div
      className="mt-20"
      id="appointment-hero"
      style={{ backgroundImage: `url(${appointmentBg})` }}
    >
      <div
        className="container mx-auto p-5 lg:py-16"
        style={{ maxWidth: "550px" }}
      >
        <div className="">
          <div className="">
            <div className="">
              <h3 className="text-lg  font-bold text-secondary uppercase text-center">
                Appointment
              </h3>
              <h1 className=" text-3xl text-white font-bold text-center">
                Make an appointment Today
              </h1>
              <form
                action=""
                className=" gap-2 flex flex-col items-center mt-10"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="input w-full"
                />
                <input type="text" placeholder="Subject" className="input w-full" />
                <textarea
                  className="textarea h-28 w-full"
                  placeholder="Your message"
                ></textarea>
                <input
                  className="mt-5 btn btn-primary bg-gradient-to-r from-secondary text-white to-primary w-24"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;

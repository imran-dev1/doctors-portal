import React from "react";
import Info from "./Info";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";

const InfoCards = () => {
  return (
    <div className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-3 ">
      <Info
        title="Opening Hours"
        details="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
        bgClass={`bg-gradient-to-r from-secondary text-white to-primary`}
      ></Info>
      <Info
        title="Visit our location"
        details="Lorem Ipsum is simply dummy text of the pri"
        img={marker}
        bgClass={"bg-accent"}
      ></Info>
      <Info
        title="Contact us now"
        details="Lorem Ipsum is simply dummy text of the pri"
        img={phone}
        bgClass={`bg-gradient-to-r from-secondary text-white to-primary`}
      ></Info>
    </div>
  );
};

export default InfoCards;

import React from "react";
import chair from "../assets/images/chair.png";
import bg from "../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #19D3AE;
    color:#fff;
    background-color:#19D3AE;
  }
  .my-selected:focus:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #19D3AE;
    color:#fff;
    background-color:#19D3AE;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: 2px solid #19D3AE;
    color: #fff;
    background-color:#19D3AE;
  }
`;

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      id="hero"
      className=" bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto" style={{ maxWidth: "700px" }}>
        <div className="hero py-16 lg:py-32">
          <div className="hero-content flex-col lg:flex-row-reverse gap-20">
            <img src={chair} className="" alt="" />
            <div className=" bg-[#ffffff50] shadow-lg rounded-2xl">
              <style>{css}</style>
              <DayPicker
                mode="single"
                selected={date}
                onDayClick={setDate}
                modifiersClassNames={{
                  selected: "my-selected",
                }}
              ></DayPicker>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

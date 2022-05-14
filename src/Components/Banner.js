import React from "react";
import chair from "../assets/images/chair.png";
import bg from "../assets/images/bg.png";
import PrimaryButton from "./Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      id="hero"
      className=" bg-cover bg-center bg-no-repeat pb-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto">
        <div className="hero py-16 lg:py-32">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <img src={chair} className="flex-1 lg:w-52" alt="" />
            <div className="flex-1">
              <h1 className=" text-4xl lg:text-5xl font-bold">
                Your New Smile Starts Here
              </h1>
              <p className="py-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

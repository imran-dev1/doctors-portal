import React from "react";
import PrimaryButton from "./Shared/PrimaryButton";
import treatment from "../assets/images/treatment.png";

const ExceptionalDental = () => {
  return (
    <div>
      <div
        className="container mx-auto bg-no-repeat bg-cover bg-center"
        style={{ maxWidth: "1000px" }}
      >
        <div className="hero">
          <div className="hero-content flex-col gap-10 lg:flex-row lg:gap-20">
            <img
              src={treatment}
              className="flex-1 lg:w-52 rounded-lg object-cover"
              alt=""
              style={{ maxHeight: "600px" }}
            />
            <div className="flex-1">
              <h1 className=" text-4xl lg:text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
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

export default ExceptionalDental;

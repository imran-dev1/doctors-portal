import React from "react";
import Service from "./service";
import fluoride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";

const Services = () => {
  return (
      <div className="py-28">
          <h3 className="uppercase text-center mb-2 text-lg text-secondary font-bold">Our services</h3>
          <h1 className="text-3xl text-center">Services We Provide</h1>
      <div className=" mt-14 px-4 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <Service
          title="Fluoride Treatment"
          details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={fluoride}
        ></Service>
        <Service
          title="Cavity Filling"
          details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={cavity}
        ></Service>
        <Service
          title="Teeth Whitening"
          details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={whitening}
        ></Service>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import Testimonial from "./Testimonial";
import people1 from "../assets/images/people1.png";
import people2 from "../assets/images/people2.png";
import people3 from "../assets/images/people3.png";
import quote from "../assets/icons/quote.svg";

const Testimonials = () => {
  return (
    <div className="pb-28 pt-0">
      <div className="container mx-auto">
        <div className="px-5 lg:px-10 flex gap-2 justify-between items-center">
          <div>
            <h3 className="uppercase mb-2 text-lg text-secondary font-bold">
              Testimonials
            </h3>
            <h1 className="text-3xl">What Our Patients Says</h1>
          </div>
          <div>
            <img className=" w-24" src={quote} alt="" style={{maxWidth:'200px'}}/>
          </div>
        </div>
        <div className="mt-14 px-4 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <Testimonial
            name="Fluoride Treatment"
            location="California"
            review="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
            img={people1}
          ></Testimonial>
          <Testimonial
            name="Fluoride Treatment"
            location="California"
            review="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
            img={people2}
          ></Testimonial>
          <Testimonial
            name="Fluoride Treatment"
            location="California"
            review="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
            img={people3}
          ></Testimonial>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

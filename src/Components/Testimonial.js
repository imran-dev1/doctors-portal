import React from "react";

const Testimonial = ({ name, location, review, img }) => {
  return (
    <div>
      <div className={`card shadow-lg shadow-gray-200 p-7  bg-white `}>
        <p>{review}</p>

        <div className="card-body px-0 pb-0 flex-row items-center">
          <figure>
            <img
              className=" ring-2 ring-secondary max-w-[70px] rounded-full border-4 border-transparent"
              src={img}
              alt=""
            />
          </figure>
          <div>
            <h2 className="text-md font-medium">{name}</h2>
            <p className="text-md text-slate-500">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

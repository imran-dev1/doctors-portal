import React from "react";

const Service = ({ title, details, img }) => {
  return (
    <div>
      <div
        className={`card shadow-lg shadow-gray-200 text-center p-4 pt-9 bg-white `}
      >
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body pb-5">
          <h2 className="text-xl font-medium text-center">{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

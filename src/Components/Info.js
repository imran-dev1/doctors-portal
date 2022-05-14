import React from "react";

const Info = ({ title, details, img, bgClass }) => {
  return (
    <div>
      <div
        className={`card lg:card-side shadow-xl p-4 pt-9 lg:pt-4 text-white ${bgClass}`}
      >
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body pb-5">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;

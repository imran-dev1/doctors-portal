import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button className="btn btn-primary bg-gradient-to-r from-secondary text-white to-primary">
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;

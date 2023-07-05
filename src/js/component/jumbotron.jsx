import React from "react";

export const Jumbotron = ({
  corners = false,
  header = "Basic Jumbotron",
  fullWidth = false,
  children,
}) => {
  return (
    <div
      className={`p-5 text-center bg-body-tertiary ${
        corners ? "rounded-5" : ""
      }`}
    >
      <div className={fullWidth ? "container py-5" : ""}>
        <h1 className="text-body-emphasis">{header}</h1>
        <div className="lead">{children}</div>
      </div>
    </div>
  );
};

import React from "react";
import preloader from "./../../../../assets/images/logo.svg";
import "./preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader__img" src={preloader} alt="" />
    </div>
  );
};

export default Preloader;

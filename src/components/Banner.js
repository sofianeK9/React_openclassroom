import React from "react";
import logo from '../assets/logo.png';
import './styles/Banner.css'

const Banner = () => {
  const title = "la maison de la jungle";
  return (
    <div>
    <div className="lmj-banner"> 
    <img src={logo} alt='la maison junglre' className="lmj-logo" />
      <h1 className="lmj-title" > {title} </h1>
      </div>
    </div>
  );
};

export default Banner;

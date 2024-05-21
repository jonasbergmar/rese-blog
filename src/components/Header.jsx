
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <div className="p-4 flex justify-between items-center bg-sky-500">
      <h1> TRAVEL PROJECT </h1>
        <Link to="/" > HOME </Link>
        <Link to="/About" > ABOUT </Link>
        <Link to="/Contact"> CONTACT </Link>
      </div>
  );
};


export default Header;
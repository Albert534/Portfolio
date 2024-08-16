import Lottie from "lottie-react";
import React from "react";
import Phone from "../assets/phone.json";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Link to="/Contact">
      <div className="w-full flex justify-center items-center mt-[100px] mb-10 min-h-10 ">
        <Lottie animationData={Phone} className="mr-6 cursor-pointer" />
        <p className="text-center font-open text-white text-lg tracking-wide cursor-pointer animate-bounce">
          Hire !!!
        </p>
      </div>
    </Link>
  );
};

export default Footer;

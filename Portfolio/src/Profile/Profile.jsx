import React from "react";
import Lottie from "lottie-react";
import Working from "../assets/working.json";
import { motion } from "framer-motion";
import Graduated from "./Graduated";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Lottie
          animationData={Working}
          className="mt-10 w-3/4 md:w-1/2 lg:w-1/3"
        />

        <div className="max-w-[600px] mt-8  p-6 rounded-lg shadow-lg">
          <p className="text-center text-gray-500 text-lg leading-relaxed font-open">
            Hi, I'm Aung Paing Oo also known as Albert, with an entry-level
            skill set and a commitment to continuous learning. I'm eager to stay
            current in the fast-paced tech world, always curious and ready to
            grow with each new challenge.
          </p>
        </div>
      </div>
      <Graduated />
    </>
  );
};

export default Profile;

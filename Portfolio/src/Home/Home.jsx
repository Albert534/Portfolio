import React from "react";
import Navbar from "../Navbar/Navbar";
import Face from "./Face";
import Tech from "./Tech";
import Footer from "../Navbar/Footer";
import Services from "./Services";

import BentoGrid from "../test";

const Home = () => {
  return (
    <>
      <div className="bg-primary">
        <Face />
        <Tech />
        <Services />

        <Footer />
      </div>
    </>
  );
};

export default Home;

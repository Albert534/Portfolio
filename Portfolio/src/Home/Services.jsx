import React, { useState, useEffect } from "react";
import BentoGrid from "../test";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/");
      const data = await res.json();
      setServices(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <p className="text-white1 text-3xl text-center mb-20 font-open mt-[200px]">
        Services
      </p>
      <BentoGrid />
    </div>
  );
};

export default Services;

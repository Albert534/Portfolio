import React, { useEffect, useState } from "react";
import { PinContainer } from "../ui/Card";
import Boom from "../../assets/boom.png";
import AI from "../../assets/imagegenerator.png";
import Todo from "../../assets/todolist.png";
import Ecommerce from "../../assets/albertcommerce.png";
import Cal from "../../assets/cal.png";
import Music from "../../assets/aurawave.png";
import Cloud from "../../assets/albert-share.png";
export default function AnimatedPinDemo() {
  const [getData, setData] = useState([]);

  const imageMap = {
    1: Boom,
    2: AI,
    3: Music, //Music
    4: Ecommerce,
    5: Todo,
    6: Cal,
    7: Cloud,
  };

  // Function to get image based on some criteria (e.g., index or property)
  const getImageForItem = (index) => {
    // Example logic: cycle through the images based on index
    const imageKeys = Object.keys(imageMap);
    return imageMap[imageKeys[index % imageKeys.length]]; // Use modulo to loop through images
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/Projects");
      const data = await response.json();
      setData(data);
      console.log("Fetched Data:", data);
    } catch (err) {
      console.error("Error fetching the data", err);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
    const intervalId = setInterval(fetchData, 30000); // Poll every 30 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {getData.length > 0 &&
        getData.map((data, index) => (
          <div
            key={index}
            className="h-[30rem] w-full flex items-center justify-center mt-0 "
          >
            <PinContainer
              title={`Go to ${data.project_title}`}
              href={data.project_link}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {data.project_title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {data.project_description}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4">
                  <img
                    src={getImageForItem(index)} // Replace with your image URL
                    alt="Custom Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
    </>
  );
}

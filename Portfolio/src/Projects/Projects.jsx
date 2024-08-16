import React from "react";
import Carduse from "../components/ui/Carduse";

const Projects = () => {
  return (
    <div className="mx-auto px-2 lg:px-0 xl:px-0 max-w-[1150px] mt-15">
      <p className="text-text text-center text-2xl font-extrabold font-open">
        These are the projects that I had done so far
      </p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-[180px]">
        <Carduse />
        {/* Add more <Carduse /> components as needed */}
      </div>
    </div>
  );
};

export default Projects;

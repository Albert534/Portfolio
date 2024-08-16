import React from "react";
import ContainerScroll from "../ui/scrollskeleton"; // Ensure correct path for your component
import Project from "../.././assets/boom.png";
export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold text-text dark:text-white mb-[200px]">
              Explore My Projects <br />
              <span className="text-4xl md:text-[3rem] font-bold mt-1 leading-none ">
                Featured Project Showcase
              </span>
            </h1>
          </>
        }
        imageSrc={Project} // Provide image source
        imageAlt="hero" // Provide image alt text
      >
        {/* Optionally include any children here */}
      </ContainerScroll>
    </div>
  );
}

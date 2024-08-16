import React from "react";
import { motion } from "framer-motion";

const techData = {
  Frontend: [
    {
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:600/1*ZjIhdWXPOt8AAQAzxrYsnw.png",
      text: "React",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      text: "Javascript",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
      text: "Tailwind",
    },
  ],

  Backend: [
    {
      imageUrl:
        "https://th.bing.com/th/id/R.1cdae2b1f4b350938aa8034b784130b8?rik=x0VLEjPFpkB9rg&pid=ImgRaw&r=0",
      text: "Node JS",
    },
    {
      imageUrl: "https://programador-jr.vercel.app/assets/images/expressjs.png",
      text: "Express JS",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg",
      text: "Next JS",
    },
  ],

  Database: [
    {
      imageUrl:
        "https://cdn-ankpc.nitrocdn.com/CXPATxiuOnLCmBDTxjvMhJHZsrQOcxUs/assets/images/optimized/rev-8b343d6/www.striim.com/wp-content/themes/striim2022/images/connectors_icons/white/mongodb.png",
      text: "MongoDB",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKH1qcmjbFZuHbAtBQCVWiYyYqgorAhnEO4ZrwpwS0TAdD6dHZ4eEZ2JxmDpkP4jHuUE&usqp=CAU",
      text: "Firebase",
    },
    {
      imageUrl:
        "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frjdzd6dl83cdqxmvqpvr.png",
      text: "Framer motion (UI Tool)",
    },
  ],
};

const Tech = () => {
  return (
    <>
      <div className=" text-center mt-[250px] text-white1 font-open text-2xl">
        <p>Tech Stack</p>
      </div>
      <div className="  justify-center grid gap-4 mx-[190px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] mb-20 min-[1920px]:mx-[450px]">
        {["Frontend", "Backend", "Database"].map((section, sectionIndex) => (
          <motion.div
            key={section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className={` border-4 border-white1 rounded-xl font-archivo text-white1 py-4 px-4 flex flex-col items-center justify-center text-center  ${
              sectionIndex === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className=" justify-center mb-4 font-open text-2xl">
              {section}
            </div>
            {techData[section].map((tech, index) => (
              <div
                key={index}
                className="border-t-4 border-white1 w-full py-4 flex flex-row"
              >
                <img
                  src={tech.imageUrl}
                  className="max-w-[80px] md:max-w-[60px] lg:max-w-[80px] lg:justify-start h-auto object-contain"
                  alt={tech.text}
                />
                <p className="ml-4 font-archivo text-center flex-grow mt-5">
                  {tech.text}
                </p>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Tech;

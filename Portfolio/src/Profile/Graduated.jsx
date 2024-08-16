import { React, useEffect, useState } from "react";
import Pearson from "../assets/pearson.jpg";
import { motion } from "framer-motion";
import Footer from "../Navbar/Footer";

const Graduated = () => {
  const [isSmScreen, setIsSmScreen] = useState(window.innerWidth >= 640); // Tailwind's `sm` breakpoint is 640px

  useEffect(() => {
    const handleResize = () => setIsSmScreen(window.innerWidth >= 640);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-2 mt-[30px] gap-5 mx-0 sm:mx-[100px]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileTap={isSmScreen ? { scale: 0.5 } : {}}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 1 }}
        >
          <a
            href="https://www.napier.ac.uk/"
            className="group relative block bg-black overflow-hidden h-[412px]"
          >
            <img
              alt=""
              src="https://uniabroad.io/storage/featuredImage/01J44489ZY63PE06T2Y1KVCCJA.png"
              className="absolute inset-0 h-[412px] w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8 z-10">
              <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                Graduated
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">Degree</p>
              <div className="mt-32 sm:mt-48 lg:mt-64 transition-transform duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  I recently graduated with a degree from Edinburgh Napier
                  University, where I gained a solid foundation and practical
                  skills in my field. The program effectively prepared me for
                  real-world challenges and professional growth.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileTap={isSmScreen ? { scale: 0.5 } : {}}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: 1.5 }}
        >
          <a
            href="https://www.pearson.com/"
            className="group relative block bg-black overflow-hidden h-[412px]"
          >
            <img
              alt=""
              src={Pearson}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8 z-10">
              <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                Graduated
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">
                Diploma
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64 transition-transform duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  I graduated with a diploma from Pearson, where I gained
                  practical skills and a solid foundation in my field, preparing
                  me for real-world challenges and career advancement.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileTap={isSmScreen ? { scale: 0.5 } : {}}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 1.7 }}
        >
          <a
            href="#"
            className="group relative block bg-black overflow-hidden h-[412px]"
          >
            <img
              alt=""
              src="https://www.eclipserecruitment.co.nz/wp-content/uploads/teamwork-iStock-1443245439-mm.jpg"
              className="absolute inset-0 h-[412px] w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8 z-10">
              <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                TEAMWORK
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">
                Team-Project
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64 transition-transform duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  I’m excited to bring my React development skills to team
                  projects. I’m adaptable, detail-oriented, and always eager to
                  learn. I also communicate effectively, which helps me tackle
                  challenges and work well with others.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileTap={isSmScreen ? { scale: 0.5 } : {}}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: 2.0 }}
        >
          <a
            href="#"
            className="group relative block bg-black overflow-hidden h-[412px]"
          >
            <img
              alt=""
              src="https://www.theneweconomy.com/wp-content/uploads/2020/06/B051-remote-working-coronavirus-technology-scaled.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8 z-10">
              <p className="text-sm font-medium uppercase tracking-widest text-green-300">
                Flexiblity
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">
                Remote Working
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64 transition-transform duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  "I'm interested in remote Fullstack development roles. I’m
                  eager to apply my frontend and backend skills in a
                  collaborative, dynamic environment.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Graduated;

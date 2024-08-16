import React, { useState, useEffect, useCallback } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Tabs, TabList, Tab, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 811);
  const [tabIndex, setTabIndex] = useState(0);

  const location = useLocation();

  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 811);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    // Determine the active tab based on the URL path
    switch (location.pathname) {
      case "/":
        setTabIndex(0);
        break;
      case "/Projects":
        setTabIndex(1);
        break;

      case "/Profile":
        setTabIndex(2);
        break;
      case "/Contact":
        setTabIndex(3);
        break;
      default:
        setTabIndex(0);
    }
  }, [location.pathname]);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "bounce",
        stiffness: 90,
      },
    },
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <>
      <div className="bg-primary">
        {/* Hamburger icon */}
        <Box className="cursor-pointer text-text mb-2 min-[811px]:hidden">
          <HamburgerIcon
            onClick={toggleNavBar}
            className="mt-4 text-2xl text-text"
          />
        </Box>

        {/* Animated content */}
        <motion.div
          initial={isSmallScreen ? "hidden" : "visible"}
          animate={isSmallScreen ? (isOpen ? "visible" : "hidden") : "visible"}
          variants={variants}
          className={`flex flex-col items-center py-7 transition-transform duration-300 z-50 ${
            isSmallScreen ? "fixed" : "max-[400px]:flex"
          }`}
        >
          <Tabs
            variant="soft-rounded"
            colorScheme="gray"
            className=" flex flex-wrap overflow-y-auto"
            size="md"
            index={tabIndex} // Control the selected tab
            onChange={(index) => setTabIndex(index)} // Update state on tab change
          >
            <TabList
              className={`flex max-w-[900px] sm:w-full ${
                isSmallScreen
                  ? "relative flex-wrap gap-[200px] py-0 items-center justify-center bg-black1 overflow-y-auto max-h-[1000px]"
                  : "flex-row"
              } gap-4 px-11 py-0 border-b-secondary`}
            >
              <Link to="/">
                <Tab
                  className={`text-text text-2xl md:text-base ${
                    isSmallScreen ? "mr-0 mt-5" : "mr-12"
                  }`}
                >
                  Home
                </Tab>
              </Link>
              <Link to="/Projects">
                <Tab
                  className={`text-text text-2xl md:text-base ${
                    isSmallScreen ? "mr-0 mt-5 " : "mr-12"
                  }`}
                >
                  Projects
                </Tab>
              </Link>

              <Link to="/Profile">
                <Tab
                  className={`text-text text-2xl md:text-base ${
                    isSmallScreen ? "mr-0 mt-4" : "mr-20"
                  }`}
                >
                  Profile
                </Tab>
              </Link>
              <Link to="/Contact">
                <Tab
                  className={`text-text text-2xl md:text-base ${
                    isSmallScreen ? "mr-0 mt-4  " : "ml-[100px]"
                  }`}
                >
                  Contact
                </Tab>
              </Link>
            </TabList>
          </Tabs>
        </motion.div>

        <hr className="mb-1 sm:flex text-center mx-auto max-w-3xl block md:mb-1 max-[659px]:hidden" />
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

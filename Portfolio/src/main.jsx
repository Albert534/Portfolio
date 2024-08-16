import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact.jsx";
import Project from "./Projects/Project.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Project /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ChakraProvider>
);

import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import NavbarMobile from "./components/SideBar/NavbarMobile";
import "./App.css";
const App = () => {
  return (
    <>
      <NavbarMobile />
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />
      <Project />
      <Contact />

      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "orangered" }}
      />
    </>
  );
};

export default App;

import React, { useState } from "react";
import "./NavbarMobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import {
  FcHome,
  FcBusinessman,
  FcTodoList,
  FcSurvey,
  FcContacts,
  FcCollaboration,
} from "react-icons/fc";
const NavbarMobile = () => {
  const [showSidebarMob, setShowSidebarMob] = useState(false);

  const handleShow = () => {
    setShowSidebarMob(!showSidebarMob);
  };
  return (
    <div className="mobile-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleShow} />
        </p>
      </div>

      {showSidebarMob ? (
        <div className="mobile-side">
          <ul>
            <li className="nav-item-mobile">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} /> Home
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinessman size={25} /> About
              </Link>
            </li>
            <li className="nav-item-mobile">
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcCollaboration size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item-mobile">
              <Link
                to="tech"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} /> Tech Stack
              </Link>
            </li>
            <li className="nav-item-mobile">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSurvey size={25} /> Projects
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;

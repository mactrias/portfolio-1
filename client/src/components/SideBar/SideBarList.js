import React from "react";
import "./SideBarList.css";
import profilePic from "../../Images/profile.png";
import { Link } from "react-scroll";
import {
  FcHome,
  FcBusinessman,
  FcTodoList,
  FcSurvey,
  FcContacts,
  FcCollaboration,
} from "react-icons/fc";
const SideBarList = ({ sidebar }) => {
  return (
    <div>
      <React.Fragment>
        {sidebar ? (
          <div className="navbar-items">
            <div className="sidebar-profile-pic">
              <img src={profilePic} alt="imagen perfil" />
            </div>

            <ul>
              <li className="nav-item">
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

              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
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

              <li className="nav-item">
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
        ) : (
          <div>
            <div className="navbar-only-icons">
              <ul>
                <li className="nav-item">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcHome size={25} />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcBusinessman size={25} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcCollaboration size={25} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="tech"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcTodoList size={25} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcSurvey size={25} />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcContacts size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default SideBarList;

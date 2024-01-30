import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Mycv from "./Cv.pdf";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">
        <Fade right>
          <h1> Hi there, im Matias Suppa Nieto and im a</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                  "React Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 80,
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="action-btn">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="contactme-btn">Contact Me</div>
            </Link>
            <div className="contactme-btn">
              <a href={Mycv} download="Matias Suppa Nieto Curriculum">
                Download Curriculum
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;

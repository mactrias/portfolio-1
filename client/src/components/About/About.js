import React from "react";
import "./About.css";
import profilePic from "../../Images/profile.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="about-image">
              <img src={profilePic} alt="imagen perfil" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
                Hello, my name is Matías. I'm 30 years old, and I'm living in
                Buenos Aires, Argentina. I am a Full Stack Developer. I am
                motivated by understanding the user and providing design and
                navigability solutions directly from the code. I have a solid
                foundation in backend technologies such as Node.js, Express, and
                Sequelize, and on the frontend, I have knowledge of Tailwind,
                Bootstrap, React JS, Redux, and a little bit of React Native.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

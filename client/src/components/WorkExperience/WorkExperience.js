import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrWorkshop } from "react-icons/gr";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Laura Vargas",
      position: "BAck-end Developer",
      des: "A Single Page Application (SPA) was developed as a group project, adhering to the SCRUM methodology. This application aims to address management issues within a cosmetic company.",
      year: "2023",
      techskills: [
        {
          techname: "React",
        },
        {
          techname: "Redux",
        },
        {
          techname: "Tailwind",
        },
        {
          techname: "NodeJs",
        },
        {
          techname: "Express",
        },
        {
          techname: "PostgreSQL",
        },
        {
          techname: "Sequelize",
        },
      ],
    },
    {
      companyname: "SPF",
      position: "Administrative Office",
      des: "Verified credentials through the use of an internal Service system, and coordinated the workgroup to fulfill daily obligations",
      year: "2013 - Present",
      techskills: [
        {
          techname: "Office Suite",
        },
        {
          techname: "Google Suite",
        },
      ],
    },
  ];

  const colorCode = ["#001f3f", "#0074D9"];

  return (
    <div className="container work-experience-section" id="work">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF4500">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colorCode[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FF4500" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colorCode[index], color: "#fff" }}
              icon={<GrWorkshop />}
              key={index} // Eliminar esta línea
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tech, index) => (
                  <div
                    className="col-xl-3 col-lg-3 col-md-2 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tech.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;

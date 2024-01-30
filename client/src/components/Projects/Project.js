import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";

const Project = () => {
  const data = [
    {
      name: "Drivers PI",
      description:
        "This was the design and creation of a Single Page Application that includes the development of: a database, a REST API with its respective routing, error handling, and at least five views with filtering, sorting, searching functionalities, creation, validations, and complete navigability.",
      ProjectLink:
        "https://github.com/mactrias/drivers-pi/tree/main/cr-pi-drivers-main",
      techUsed: [
        { techname: "React-Redux" },
        { techname: "CSS" },
        { techname: "NodeJS" },
        { techname: "Express" },
        { techname: "PostgreSQL" },
        { techname: "Sequelize" },
      ],
    },
    {
      name: "Laura Vargas Project",
      description:
        "A Single Page Application (SPA) developed as a group project, following the SCRUM methodology. My main role was focused on the Back-end, utilizing technologies such as React and PostgreSQL, while also assisting with the Front-end.",
      ProjectLink: "https://www.youtube.com/watch?v=rRU_QRKHRtI",
      techUsed: [
        { techname: "React-Redux" },
        { techname: "Tailwind" },
        { techname: "NodeJS" },
        { techname: "Express" },
        { techname: "PostgreSQL" },
        { techname: "Sequelize" },
      ],
    },
  ];

  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList
              name={item.name}
              description={item.description}
              ProjectLink={item.ProjectLink}
              techUsed={item.techUsed}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

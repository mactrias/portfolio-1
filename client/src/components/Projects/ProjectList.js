import React, { useState } from "react";
import "./Project.css";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";

const ProjectList = ({
  name,
  description,
  ProjectLink,
  techUsed,
  projectId,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Zoom>
      <div
        className={show ? "project-List-open project-List" : "project-List"}
        onClick={handleShow}
      >
        <div className="title-collapse-option">
          <h5>{name}</h5>
          <p>
            {show ? (
              <BsArrowUpShort size={20} />
            ) : (
              <BsArrowDownShort size={20} />
            )}
          </p>
        </div>

        <div className="description">
          {show ? (
            <p>{description}</p>
          ) : (
            <p>{description.substring(0, 80)}...</p>
          )}
        </div>

        <div className="row">
          {techUsed &&
            techUsed.map((tech, index) => (
              <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p>{tech.techname}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="link-btn">
          <a target="_" href={ProjectLink}>
            Project link
          </a>
        </div>
      </div>
    </Zoom>
  );
};

export default ProjectList;

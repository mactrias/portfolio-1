import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";

const TechStack = () => {
  const [loadMore, setLoadMore] = useState(6);

  const handleLoadMore = () => {
    setLoadMore((prev) => prev + 3);
  };

  const handleLoadLess = () => {
    setLoadMore(Math.floor(data.length / 2));
  };

  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "MERN Stack Developer",
    },
    // Resto de los datos
  ];

  const colorCode = [
    "#001f3f",
    "#0074D9",
    "#2ECC40",
    "#3D9970",
    "#FFDC00",
    "#FF851B",
    "#FF4136",
    "#F012BE",
    "#B10DC9",
    "#AAAAAA",
    "#FF5733",
    "#FF2255",
  ];

  // Función para desactivar las advertencias de React
  const disableReactWarnings = () => {
    console.warn = () => {};
  };

  return (
    <div className="container techStack-section" id="tech">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, loadMore).map((item, index) => (
          <Fade right key={index}>
            <div className="col-xl-4 col-lg-4 col-md-2 col-sm-1">
              <div className="tech-stack-content">
                <span
                  className="number-tech"
                  style={{ backgroundColor: colorCode[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      {loadMore >= data.length ? (
        <span className="load-more-tech" onClick={handleLoadLess}>
          Load Less
        </span>
      ) : (
        <span className="load-more-tech" onClick={handleLoadMore}>
          Load More
        </span>
      )}
      {disableReactWarnings()} {/* Desactivar advertencias de React */}
    </div>
  );
};

export default TechStack;

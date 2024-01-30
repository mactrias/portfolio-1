import React, { useState } from "react";
import "./SideBar.css";
import Home from "../Home/Home";
import SideBarList from "./SideBarList";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const handleExpandClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={sidebar ? "sidebar-expanded" : "sidebar"}>
        <div className="icon-for-sidebar-modified">
          <p onClick={handleExpandClick}>
            {sidebar ? (
              <BsFillArrowLeftCircleFill size={30} />
            ) : (
              <BsFillArrowRightCircleFill size={30} />
            )}
          </p>
        </div>

        <SideBarList sidebar={sidebar} />
      </div>

      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;

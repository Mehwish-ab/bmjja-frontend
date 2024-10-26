import React, { useState } from "react";
import styles from "./Sidebar.module.css"; 
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // const handleCollapse = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <>
      <div
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
      >
        {/* <div className={styles.logo} onClick={handleCollapse}>
        <h2>{isCollapsed ? "AP" : "Admin Portal"}</h2>
      </div> */}
        <ul className={styles.navLinks}>
          <li>
          <Link to="/admin" > <i className="fas fa-tachometer-alt" style={{color:"grey"}} ></i> {!isCollapsed && "Dashboard"}</Link>
          
          </li>
          <li>
          
            <Link to="/uploadvideo" > <i className="fas fa-users" style={{color:"grey"}} ></i> {!isCollapsed && "Upload Video"}</Link>

          </li>
          <li>
          <Link to="/videolist" > <i className="fas fa-users" style={{color:"grey"}} ></i> {!isCollapsed && "Video List"}</Link>

           
          </li>
          <li>
            
             <Link to="/addcategory" > <i className="fas fa-users" style={{color:"grey"}} ></i> {!isCollapsed && "Add Category"}</Link>
          </li>
         
          {/* <li>
            <a href="#users">
              <i className="fas fa-users"></i> {!isCollapsed && "Users"}
            </a>
          </li> */}
          <li>
            <a href="#settings">
              <i className="fas fa-cog" style={{color:"grey"}} ></i> {!isCollapsed && "Settings"}
            </a>
          </li>
     
          <div className={styles.logout}>
            <a href="/">
              <i className="fas fa-sign-out-alt"></i> {!isCollapsed && "Logout"}
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

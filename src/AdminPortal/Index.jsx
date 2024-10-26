import React from "react";
import "./index.css";
import "./styles.js";
import Navbar from "./Navbar/Navbar.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Sidebar/Sidebar.jsx";
// import { Routes, Route, useLocation } from "react-router-dom";

function index() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Routes>
//           <Route path="/createvideo" element={ <CreateVideo/>} />
//      
//           <Route path="*" element={<div>Page not found.</div>} />
//         </Routes> */}
     
    </div>
  );
}

export default index;

import React from "react";

import { MenuOutlined } from "@ant-design/icons";
import Dropdown from "react-bootstrap/Dropdown";

import { NavbarContainer } from "./styles";
import logo from "../../assets/svgs/logo.svg";
import { FlexContainer, fontFamilyMedium, fontFamilyRegular } from "../GlobalStyle";

import { useNavigate, useLocation } from 'react-router-dom';


const AppNavbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isVideosPage = location.pathname === '/videos';

  const NAVBAR_ITEMS = [
    { id: 7, label: "Home", link: "/", ref: "homeSection" },
    { id: 1, label: "Videos", link: "/videos" },
    { id: 3, label: "Time Table", ref: "timeTableSection" },
    { id: 4, label: "Membership", ref: "membershipSection" },
    { id: 6, label: "Contact Us", ref: "contactUsSection" },
  ];

  const handleClick = (item) => {
    if (item.ref) {
      if (isHomePage && item.label === "Home") {
        scrollToTop(); // Scroll to top if already on the Home page and clicking Home again
      } else if (isVideosPage && (item.label === "Home" || item.label === "Videos")) {
        navigate(item.link); // Navigate to link if on Videos page and clicking Home or Videos
      } else {
        scrollToSection(item.ref); // Scroll to section for other cases
      }
    } else if (item.link) {
      navigate(item.link);
    }
  };

  const navbarLinks = NAVBAR_ITEMS.map((item) => (
    <div
      className="app-nav-link cursor-pointer"
      key={item.id}
      onClick={() => handleClick(item)}
    >
      {item.label}
    </div>
  ));

  return (
    <NavbarContainer>
      <FlexContainer
        className="container app-navbar-container py-2 px-0"
        justifycontent="space-between"
      >
        <FlexContainer
          className="app-logo gap-3 cursor-pointer"
          onClick={() => navigate("/")}
          justifycontent="space-between"
        >
          <img src={logo} alt="" />
          <h4 className="brand_text">Brighton Marina Jiu Jitsu Academy</h4>
        </FlexContainer>
        <div className="app-navbar gap-4 d-lg-flex d-none">{navbarLinks}</div>

        <button
//className="app-nav-link cursor-pointer"
onClick={handleClick}
style={{ padding: "10px 20px", borderRadius: "10px", background:'none',fontFamily:fontFamilyRegular}}
>
Call To Book <br />{" "}
<span style={{ fontFamily: fontFamilyMedium }}>07846997004</span>
</button>

        <Dropdown className="d-lg-none d-block">
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <MenuOutlined />
          </Dropdown.Toggle>

          <Dropdown.Menu className="ps-3">
            {NAVBAR_ITEMS.map((item) => (
              <Dropdown.Item
                key={item.id}
                onClick={() => handleClick(item)}
              >
                {item.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </FlexContainer>
    </NavbarContainer>
  );
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    var headerOffset = 120;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
// const AppNavbar = ({ scrollToSection }) => {
//   const navigate = useNavigate();
//   const NAVBAR_ITEMS = [
//     { id: 7, label: "Home", ref: "homepage" },
//     { id: 1, label: "Curriculum", ref: "curriculumSection" },
//     { id: 3, label: "Time Table", ref: "timeTableSection" },
//     { id: 4, label: "Membership", ref: "membershipSection" },
//     { id: 6, label: "Contact Us", ref: "contactUsSection" },
//   ];

//   const handleClick = () => {};

//   const navbarLinks = NAVBAR_ITEMS.map((item) => (
//     <div
//       className="app-nav-link cursor-pointer "
//       key={item.id}
//       onClick={() => scrollToSection(item.ref)}
//     >
//       {item.label}
//     </div>
//   ));

//   return (
//     <NavbarContainer>
//       <FlexContainer
//         className="container app-navbar-container py-2 px-0"
//         justifycontent="space-between"
//       >
//         <FlexContainer
//           className="app-logo gap-3 cursor-pointer"
//           onClick={() => navigate("/")}
//           justifycontent="space-between"
//         >
//           <img src={logo} alt="" />
//           <h4 className="brand_text">Brighton Marina Jiu Jitsu Academy</h4>
//         </FlexContainer>

//         <div className="app-navbar gap-4 d-lg-flex d-none">{navbarLinks}</div>
//         <button
//           //className="app-nav-link cursor-pointer"
//           onClick={handleClick}
//           style={{ padding: "10px 20px", borderRadius: "10px",  background:'none',fontFamily:fontFamilyRegular}}
//         >
//           Call To Book <br />{" "}
//           <span style={{ fontFamily: fontFamilyMedium }}>07846997004</span>
//         </button>
      
//         <Dropdown className="d-lg-none d-block">
//           <Dropdown.Toggle variant="" id="dropdown-basic">
//             <MenuOutlined />
//           </Dropdown.Toggle>
          
//           <Dropdown.Menu className="ps-3">{navbarLinks}</Dropdown.Menu>
//         </Dropdown>
//       </FlexContainer>
//     </NavbarContainer>
//   );
// };

export default AppNavbar;

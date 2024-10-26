import { ArrowUpOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { pureDark5 } from "../../GlobalStyle";
import { scrollToTop } from "../../../utils/helper";

const ScrollToTopButtonStyled = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: fixed;
  bottom: 5px;
  right: 30px;
  background: ${pureDark5};
  color: white;
`;
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollToTopButtonStyled
      className="scroll-to-top-button"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <ArrowUpOutlined />
    </ScrollToTopButtonStyled>
  );
};

export default ScrollToTopButton;

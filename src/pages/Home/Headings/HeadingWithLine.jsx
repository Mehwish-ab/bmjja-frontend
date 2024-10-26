import React from "react";
import styled from "styled-components";
import {
  FlexContainer,
  mediaDeviceMax,
  pureDark,
} from "../../../components/GlobalStyle";
import { whenScreenIs1024AndLess } from "../../../components/AppNavbar/styles";

const HeadingWithLineStyled = styled.div`
  text-align: center;

  .text {
    font-size: 16px;
    color: ${pureDark};
    font-weight: 300;
    font-family: EnnVisions;

    ${whenScreenIs1024AndLess} {
      font-size: 16px;
    }

    @media screen and ${mediaDeviceMax.tablet} {
      font-size: 14px;
    }
  }

  .line {
    width: 25px;
    height: 2px;
    background: ${pureDark};
    display: block;
    @media screen and ${mediaDeviceMax.tabletS} {
      display: none;
    }
  }
`;
const HeadingWithLine = ({ className, heading, children, onClick }) => {
  return (
    <HeadingWithLineStyled
      className={`${className || ""}  ${onClick ? "cursor-pointer" : ""}`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <FlexContainer className="text gap-2">
        <div className="line line-left" />
        {heading}
        <div className="line line-right" />
      </FlexContainer>
      {children}
    </HeadingWithLineStyled>
  );
};

export default HeadingWithLine;

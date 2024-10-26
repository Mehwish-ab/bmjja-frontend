import styled from "styled-components";
import {
  fontFamilyRegular,
  mediaDeviceMax,
  pureDark2,
  pureDark3,
} from "../GlobalStyle";

export const whenScreenIs1024AndLess = `@media screen and ${mediaDeviceMax.laptop}`;

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index:1001;
  background-color: #fff;

  .dropdown-toggle {
    border: 1px solid ${pureDark2};
    &::after {
      display: none;
    }
  }
  .app-logo {
    .brand_text {
      font-size: 18px;
      color: ${pureDark3};
      display: block;
      ${whenScreenIs1024AndLess} {
        font-size: 16px;
      }
      @media screen and ${mediaDeviceMax.mobileXL} {
        display: none;
      }
    }
  }

  .toggler {
    display: none;

    ${whenScreenIs1024AndLess} {
      display: block;
    }
  }

  .app-navbar {
    display: flex;
    flex-direction: row;
  }

  .app-nav-link {
    color: #000000;
    font-weight: 400;
    font-family: ${fontFamilyRegular};
    text-decoration: none;
    font-size: 16px;
    transition: all 0.2s ease-in-out;

    ${whenScreenIs1024AndLess} {
      font-size: 14px;
    }
  }
  .mobile-nav {
    position: absolute;
  }
`;

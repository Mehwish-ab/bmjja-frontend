import styled from "styled-components";
import bgImg from "../../../assets/images/joining_bg.png";
import {
  fontFamilyRegular,
  mediaDeviceMax,
  pureDark3,
} from "../../../components/GlobalStyle";
export const JoiningContainer = styled.div`
  .bg-image {
    background: url(${bgImg}) no-repeat;
    background-position: center;
    background-size: cover;

    .text-card {
      width: 445px;

      @media screen and ${mediaDeviceMax.tabletS} {
        width: 350px;
      }

      @media screen and ${mediaDeviceMax.mobileXL} {
        width: 90%;
        margin: auto;
      }
    }
    .description {
      margin-top: 10px;
      .content {
        margin-top: 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          color: #fff;
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .our-mission-section {
    background: ${pureDark3};

    .text {
      font-size: 26px;
      font-weight: 900;
      font-family: ${fontFamilyRegular};
      letter-spacing: 1px;
      line-height: 37px;

      @media screen and ${mediaDeviceMax.tabletL} {
        font-size: 23px;
        line-height: 30px;
      }

      @media screen and ${mediaDeviceMax.mobileBS} {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
`;

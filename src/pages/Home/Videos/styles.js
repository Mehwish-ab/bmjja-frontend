import styled from "styled-components";
import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const VideoSectionStyled = styled.div`
  .video-card {
    border: 1px solid #e7e5f2;
    border-radius: 10px 10px 0 0;
    margin: 0px 6px;

    .thumbnail {
      .thumbnail-image {
        img {
          width: 100%;
        }
      }
    }
    .body {
      padding: 10px;

      .title {
        h4 {
          font-size: 16px;
          min-width: 265px;

          @media screen and ${mediaDeviceMax.laptopL} {
            font-size: 14px;
          }
        }
      }
      .description {
        font-size: 14px;
        color: #333333;

        @media screen and ${mediaDeviceMax.laptopL} {
          font-size: 12px;
        }
      }
      .date {
        color: #4f4f4f;
        font-size: 12px;

        @media screen and ${mediaDeviceMax.laptopL} {
          font-size: 10px;
        }
      }
      .rating {
        div {
          font-size: 13px;
        }
      }
      .learn-more a {
        font-size: 12px;
        color: #1c394b;
        text-decoration: none;

        @media screen and ${mediaDeviceMax.laptopL} {
          font-size: 10px;
        }
      }
    }
  }
`;

import styled from "styled-components";
import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const VideoDetailsStyled = styled.div`
  .video-details-section {
    flex: 4;
    @media screen and (max-width: 1200px) {
      flex: 4;
    }
    @media screen and ${mediaDeviceMax.tabletL} {
      flex: 100%;
    }
    .video-container {
      width: 100%;
      height: 584px;
   border-radius: 50px;
     

      video {
        width: 100%;
        height: 100%;
      border-radius: 10px;
      }
    }
    .details {
      border: 1px solid #dedef9;
      padding: 20px 18px;
      border-radius: 10px;
    

      p {
        font-size: 13px;
        line-height: 25px;
        letter-spacing: 1px;
      }
    }
  }
  .videos-section {
  margin-top: 7.3rem;
    flex: 2;
    @media screen and ${mediaDeviceMax.tabletL} {
      height: 600px;
      overflow: auto;
      border: 1px solid #dedef9;
      border-radius: 6px;
    }
    .video-card {
    // margin-top: 7.3rem;
      border: 1px solid #dedef9;
      border-radius: 6px;
      .image {
        width: 128px;
        height: 80px;
        
        img {
          border-radius: 6px 0px 0px 6px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

import styled from "styled-components";
// import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const VideoCardStyled = styled.div`
  border: 1px solid #dedef9;
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 10px;

  .image-container {
    position: relative;
    img {
      border-radius:10px 10px 0px 0px;
      width: 100%;
    }
    .time {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: #000000cc;
      color: white;
      padding: 0 5px;
      border-radius: 2px;

      p {
        font-size: 11px;
        margin-top: 10px;
        letter-spacing: 1px;
      }
    }
  }
`;

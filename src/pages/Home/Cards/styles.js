import styled from "styled-components";
import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const ImageCardStyled = styled.div`
  .button {
    padding: 10px 0;
    font-size: 16px;
    text-transform: uppercase;
    background: ${(prop) => prop.btnbackground};
  }
`;

export const TextCardStyled = styled.div`
  padding: 22px 20px;
  border-radius: 9px 9px 0px 0;
  background: ${(prop) => prop.background || "transparent"};

  @media screen and ${mediaDeviceMax.laptop} {
    padding: 16px;
  }

  .content {
    font-size: 13px;
    font-weight: 400;
    margin-top: 10px;
    line-height: 21px;
    letter-spacing: 1px;

    p {
      color: #2a4556;
      margin-bottom: 10px;
    }
  }
`;

export const CardGridStyled = styled.div`
  .text-card {
    flex: 2;
  }
  .image-card {
    flex: 1;
    display: flex;
    flex-direction: column;

    .image {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

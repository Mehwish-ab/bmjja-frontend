import styled from "styled-components";
import { fontFamilyRegular, mediaDeviceMin } from "../../GlobalStyle";

export const ButtonContainer = styled.button`
width: 255px;
height: 38px;
  padding: 8px 6px 8px 6px;
  gap: 10px;
  border-radius: 6px 6px 0px 0px;
  border: 0.5px 0px 0px 0px;
  opacity: 0px;

  font-size: 12px;
height:${(prop) => prop.height}
  font-family: ${fontFamilyRegular};
  width: ${(prop) => prop.width};
  background: ${(prop) => prop.bgcolor};
  border: 1px solid ${(prop) => prop.bordercolor};

  @media screen and ${mediaDeviceMin.laptop} {
    font-size: 14px;
  }
`;

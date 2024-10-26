import styled from "styled-components";
import {
  lightGreen1,
  mediaDeviceMax,
  pureDark3,
  pureDark4,
} from "../../../components/GlobalStyle";

export const BannerContainer = styled.div`
  background: ${pureDark4};

  .bannerImg {
    width: 100%;
    height: 293px;
    @media screen and ${mediaDeviceMax.tablet} {
    height: auto;
    }
    object-fit: cover;
  }
  .join_tour_section {
    background: ${pureDark3};
  }

  .get_uniform_section {
    background: ${lightGreen1};
  }
  .btn-book-intro {
    width: 290px;
  }
  h6{
    font-size: 16px;
  }
  h4 {
    font-size: 18px;
  }
`;

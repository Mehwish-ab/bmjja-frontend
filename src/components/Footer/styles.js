import styled from "styled-components";
import { mediaDeviceMax, pureDark, whiteColor } from "../GlobalStyle";
export const FooterStyled = styled.div`
  .footer-wrapper {
    position: relative;
    .bg_img {
      display: block;
      @media screen and ${mediaDeviceMax.tabletL} {
        display: none;
      }
    }
    .address.address-at-bottom {
      bottom: 30px;
      left: 100px;
      @media screen and (max-width: 1200px) {
        left: 70px;
      }
    }
    .address p {
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 20px;
      color: ${whiteColor};

      @media screen and ${mediaDeviceMax.tabletL} {
        font-size: 12px;
        color: ${pureDark};
      }
    }
    .contact {
      
      position: absolute;
      top: 0;
      width: 100%;
      @media screen and ${mediaDeviceMax.tabletL} {
        position: relative;
      }
      .contact-text-section {
    
        padding: 100px 0 0 100px;
        @media screen and (max-width: 1200px) {
          padding: 70px 0 0 70px;
        }
        @media screen and ${mediaDeviceMax.tabletL} {
          padding: 0;
        }
        .heading {
          h3 {
            font-family: "EnnVisions";
            font-size: 22px;
            margin-bottom: 10px;
            color: ${whiteColor};
            @media screen and ${mediaDeviceMax.tabletL} {
              font-size: 20px;
              color: ${pureDark};
            }
          }
          h5 {
            font-size: 19px;
            font-weight: 300;
            margin-bottom: 20px;
            color: ${whiteColor};

            @media screen and ${mediaDeviceMax.tabletL} {
              font-size: 17px;
              color: ${pureDark};
            }
          }
          p {
            font-size: 14px;
            font-weight: 300;
            margin-bottom: 20px;
            color: ${whiteColor};

            @media screen and ${mediaDeviceMax.tabletL} {
              font-size: 12px;
              color: ${pureDark};
            }
          }
        }
        .address p {
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 20px;
          color: ${whiteColor};

          @media screen and ${mediaDeviceMax.tabletL} {
            font-size: 12px;
            color: ${pureDark};
          }
        }
      }
      .contact-form-section {
        width: 490px;
        @media screen and (max-width: 1210px) {
          width: 400px;
        }
        @media screen and ${mediaDeviceMax.tabletL} {
          width: 100%;
        }

        .card {
        height: 50%
          width: 100%;
          border: 1px solid #e7e5f2;
          &-body {
            .form-control {
             font-family:EnnVisions;
              width: 90%;
              margin: 4px auto;
              // padding-top: 10px;
              // padding-bottom: 5px;
                border-bottom: 1px solid black;
              
            }
            button {
            margin-top: 3px;
              background: #c8d7dd;
              border: 1px solid #c8d7dd;
              color: #282f40;
              // font-weight: bold;
            }
          }
        }
      }
    }
  }
`;

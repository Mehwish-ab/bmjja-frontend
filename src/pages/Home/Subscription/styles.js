import styled from "styled-components";
import { whenScreenIs1024AndLess } from "../../../components/AppNavbar/styles";
export const SubscriptionStyled = styled.div`
  background: #f5f5f5;
  border-radius: 10px 10px 0px 0px;
  .itemClass {
    display: flex;
  }
  .subscription-card-row {
    &::-webkit-scrollbar {
      width: 12px;
      height: 2px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #fffffba;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #fffffbc;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }
  }
  .subscription-card {
    position: relative;
    height: 526px;
    border-radius: 10px;
    color: #fff;
    margin: 0px 8px;

    .heading {
      margin: 10px 0;
      padding: 20px 20px 0 20px;

      h4 {
        font-size: 20px;
        margin-bottom: 8px;

        ${whenScreenIs1024AndLess} {
          font-size: 18px;
        }
      }

      p {
        font-size: 14px;
        margin-bottom: 8px;
        border-bottom: 1px solid #ffffffbd;
        padding-bottom: 10px;
        ${whenScreenIs1024AndLess} {
          font-size: 12px;
        }
      }
    }

    .body {
      padding: 0px 20px;

      .price {
        font-size: 33px;
        font-weight: 700;
        margin-bottom: 16px;
        ${whenScreenIs1024AndLess} {
          font-size: 24px;
        }
      }
      .description {
        font-size: 12px;
        margin-bottom: 16px;
        ${whenScreenIs1024AndLess} {
          font-size: 12px;
        }
      }

      .features {
        list-style: none;
        margin: 0;
        padding: 0;
        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          padding: 8px 0;
          ${whenScreenIs1024AndLess} {
            font-size: 12px;
          }
        }
      }
    }
    .footer {
      text-align: center;
      padding: 40px 0;
      position: absolute;
      bottom: 0;
      width: 100%;

      button {
        bottom: 9px;
        width: 175px;
        border-radius: 9px 9px 0px 0px;
        opacity: 0px;
        color: #fff;
        background: transparent;

        border: 1px solid #ffffffba;
        border-radius: 9px 9px 0px 0px;
      }
    }
  }
  .subscription-card-bg-odd {
    background: linear-gradient(198.13deg, #4436fd, #7066fd);
  }
  .subscription-card-bg-even {
    background: linear-gradient(198.13deg, #26243a, #413e5b);
  }
`;

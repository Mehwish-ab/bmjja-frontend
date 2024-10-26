import styled from "styled-components";
import {
  fontFamilyMedium,
  fontFamilyRegular,
} from "../../../components/GlobalStyle";

export const TimeTableStyled = styled.div`
  .table-responsive {
    &::-webkit-scrollbar {
      width: 12px;
      height: 3px;
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
  .table {
    border: 1px solid #ebdede !important;
    thead {
      tr {
        .col-heading {
          color: #302c36;
          font-size: 14px;
          font-weight: 500;
          font-family: ${fontFamilyRegular};
        }
      }
    }
    tbody {
      tr {
        td {
          min-width: 183px;
          padding: 0 !important;
          white-space: nowrap;
        }
        p {
          font-size: 14px;
          color: #000000;
          display: inline-block;
        }
        .col-time {
          width: 43px;
          text-align: center;
          padding: 4px 3px !important;
          background: #ffc0cb;
          border: 1px solid #ebdede;
          font-family: ${fontFamilyMedium};
          display: inline-block;
        }
      }
    }
  }
`;

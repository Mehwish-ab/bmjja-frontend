import React from "react";
import { TextCardStyled } from "./styles";
import { SmallHeadingBlack } from "../../../components/GlobalStyle";

const TextCard = ({ heading, children, className, width, background,id }) => {
  return (
    <TextCardStyled
      className={"text-card " + className}
      width={width}
      background={background}
      id={id}
    >
      {heading && <SmallHeadingBlack>{heading}</SmallHeadingBlack>}
      <div className="content">{children}</div>
    </TextCardStyled>
  );
};

export default TextCard;

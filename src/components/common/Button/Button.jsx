import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({
  children,
  bgColor,
  textColor,
  borderColor,
  className,
  width,
  onClick,
  type,
  disable,
  height
}) => {
  return (
    <ButtonContainer
      bgcolor={bgColor}
      height={height}
      textcolor={textColor}
      bordercolor={borderColor}
      width={width}
      className={className}
      onClick={onClick}
      type={type || "button"}
      disabled={disable}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

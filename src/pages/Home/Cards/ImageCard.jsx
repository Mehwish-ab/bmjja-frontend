import React from "react";
import { ImageCardStyled } from "./styles";
// import { fontFamilyMedium } from "../../../components/GlobalStyle";
const ImageCard = ({
  id,
  btnBackground,
  image,
  btnLabel,
  width,
  handleClick,
}) => {
  return (
    <ImageCardStyled
      className="image-card"
      key={id}
      btnbackground={btnBackground}
      width={width}
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <button
        onClick={handleClick}
        className={`button text-white text-center cursor-pointer w-100`}
      >
        {btnLabel}
      </button>
    </ImageCardStyled>
  );
};

export default ImageCard;

import React from "react";
import styled from "styled-components";

const VideoDescriptionStyled = styled.div`
  padding: 8px 10px;
 

  .heading {
    color: #0f0f0f;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    margin-bottom: 3px;
  }
  .views-and-likes {
    color: #606060;
    font-size: 12px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 4px;

   
  }
`;
const VideoDescriptionOfDetail = ({ heading,description,views,time }) => {

  return (
    <VideoDescriptionStyled>
   <h4 className="heading">{heading}</h4>
<div className="views-and-likes">
  <p className="description">{description}</p>
  <div>
    <p>Brighton Marina</p>
    <p>{views}{' '}.{' '}{time}</p>
  
  </div>

</div>
    </VideoDescriptionStyled>
  );
};

export default VideoDescriptionOfDetail ;

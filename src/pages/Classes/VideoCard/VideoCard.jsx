import React from "react";
import { VideoCardStyled } from "./styles";
// import videoImg from "../../../assets/images/youtube.png";
import { useNavigate } from "react-router-dom";
import VideoDescription from "./VideoDescription";
import parse from 'html-react-parser';

const VideoCard = ({title,description,img ,id}) => {
  const navigate = useNavigate();
  const des = typeof description === 'string' ? description : '';
  return (
    <VideoCardStyled
      className="cursor-pointer"
      onClick={() => navigate(`/videos/${id}`)}
    >
      <div className="image-container">
      <img src={`http://localhost:3000/thumbnails/${img}`} alt="" />
        {/* <div className="time">
          <p>3:30</p>
        </div> */}
      </div>
      <VideoDescription
        heading={title}
        description={parse(des)}     
      />
    </VideoCardStyled>
  );
};

export default VideoCard;

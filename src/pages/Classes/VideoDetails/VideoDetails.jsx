import React, { useEffect, useState } from "react";
import { VideoDetailsStyled } from "./styles";
import { Container } from "react-bootstrap";
import VideoDescription from "../VideoCard/VideoDescription";
import axios from 'axios';
import { SmallHeadingBlack } from ".././../../components/GlobalStyle";
import parse from 'html-react-parser';

import { useNavigate, useParams } from "react-router-dom/dist";
import VideoDescriptionOfDetail from "../VideoCard/VideoDescriptionOfDetail";
const VideoDetails = () => {
  const { videoId } = useParams();
  // const videoData = data.find((item) => item.id === videoId);
  const [video,setVideo]=useState()
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    const fetchVideos = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/videos/${videoId}`); // Replace with your backend URL
    
      console.log("resposne",response)
      setVideo(response.data);
      const res = await fetch('http://localhost:3000/videos'); // Replace with your backend URL
      const data = await res.json();
      setAllVideos(data);
    } catch (err) {
      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  fetchVideos();
  
  },[videoId])
  // console.log("video Data",data,videoId,videoData)
  console.log("vdeoby id",video)
  const description = typeof video?.description === 'string' ? video.description : '';
  return (
    <VideoDetailsStyled>
      <Container>
        <div className="d-flex flex-wrap gap-3">
          <div className="video-details-section">
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src={video?.embedLink}
                title="1st Lesson Fundamentals Single Hand Guard pass - Brighton Marina Jiu Jitsu Academy - www.bmjja.co.uk"
                frameborder="10x"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="title my-3">
              <SmallHeadingBlack style={{fontSize:'24px'}}>{video?.title}</SmallHeadingBlack>
            </div>
            <div className="details">{parse(description)}</div>
          </div>

          <div className="videos-section d-flex flex-column gap-3">
            {allVideos?.map((item) => (
              <VideoCard id={item._id} img={item.thumbnail} title={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </VideoDetailsStyled>
  );
};

export default VideoDetails;

const VideoCard = ({ img, title, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="video-card d-flex align-items-center justify-content-start"
      onClick={() =>{
        navigate(`/videos/${id}`)
        window.location.reload()
      }
    }
    >
      <div className="image">
      <img src={`http://localhost:3000/thumbnails/${img}`} alt="" />
      </div>
      <VideoDescriptionOfDetail
        heading={title}
         views={"3.5M"}
        time={"1 year ago"}
      />
    </div>
  );
};

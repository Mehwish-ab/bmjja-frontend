import React, { useState, useEffect, useRef } from "react";
import { VideoSectionStyled } from "./styles";
import HeadingWithLine from "../Headings/HeadingWithLine";
import thumbnail from "../../../assets/images/Group 427321431.png";
import thumbnail2 from "../../../assets/images/Background.png";
import thumbnail3 from "../../../assets/images/Background (1).png";
import thumbnail4 from "../../../assets/images/Background (2).png";
import { SmallHeadingBlack } from "../../../components/GlobalStyle";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { Rate } from "antd";
import Fancybox from "../../../components/common/FancyBox";

const videoData = [
  {id:1,
    image: thumbnail,
    heading: "Single-Hand Guard Pass",
    description:
      "A technique in Brazilian Jiu-Jitsu where the practitioner uses one hand to control the opponent's leg or hip while passing their guard, enabling them to establish a dominant position.",
    videoId: "https://youtu.be/lvBHGGK_WcQ",
  },
  {id:2,
    image: thumbnail2,
    heading: "Double Hand Guard pass",
    description:
      " Using both hands to control the opponent's legs, enabling passage of their guard",
    rating: 4,
    videoId: "https://youtu.be/H9qe1vdj_Oc",
  },
  {id:3,
    image: thumbnail3,
    heading: "Side Control Fundamental",
    description: "Essential position in Jiu Jitsu for control and submissions",
    rating: 4,
    videoId: "https://youtu.be/fd1xC1YsPUg",
  },
  {id:4,
    image: thumbnail4,
    heading: "Americana from Mount Fundamental",
    description:
      "The Americana from Mount: A fundamental Jiu Jitsu technique leveraging arm pressure for a submission from mount position",
    rating: 4,
    videoId: "https://youtu.be/jhh9qHQ8LlA",
  },
];

const VideoSection = () => {
  const navigate = useNavigate();

  const handleVideoDetail = () => {
    navigate("/videos");
  };

  const [openFancyBox, setOpenFancyBox] = useState("");

  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <VideoSectionStyled className="mb-4" id="curriculumSection">
      <Container>
        <HeadingWithLine
          className={"mb-4"}
          heading={`Brighton Marina Jiu Jitsu Academy Videos`}
        >
          <p onClick={handleVideoDetail}>
            Click in Here to See Full Video Gallery
          </p>
        </HeadingWithLine>
        {openFancyBox !== "" ? (
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
            openFancyBox={openFancyBox}
            setFancyboxIsActive={setOpenFancyBox}
          >
            {videoData.map((video, index) => (
              <a
                id={`box-${index}`}
                data-fancybox="gallery"
                href={video.videoId}
              >
                <img src={video.image} width="200" height="150" />
              </a>
            ))}
          </Fancybox>
        ) : (
          <Carousel
            // slidesToSlide={1}
            swipeable
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            draggable
            focusOnSelect={false}
            infinite
            minimumTouchDrag={80}
            // customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass=""
          >
            {videoData.map((c, index) => (
              <div
                onClick={() => setOpenFancyBox(`box-${index}`)}
                className="video-card"
                key={c}
              >
                <div className="thumbnail">
                  <div className="thumbnail-image">
                    <img src={c.image} alt="" />
                  </div>
                </div>
                <div className="body">
                  <div className="title mb-2">
                    <SmallHeadingBlack>{c.heading}</SmallHeadingBlack>
                  </div>
                  <p className="description mb-2">
                    {c.description.substring(0, 70).concat("...")}
                  </p>
                  <div className="d-flex justify-content-end learn-more">
                    <Link to={`/videos/${c.id}`}>Learn more</Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
        <div className="mt-4"></div>
        <HeadingWithLine
          className={"mt-4"}
          heading={`See All Videos`}
          onClick={() => navigate("/videos")}
        />
      </Container>
    </VideoSectionStyled>
  );
};

export default VideoSection;

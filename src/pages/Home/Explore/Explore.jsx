import React from "react";
import { ExploreContainer } from "./styles";
import { Container } from "react-bootstrap";
import explore2 from "../../../assets/images/FMJJTHUMB-1.png";
import explore4 from "../../../assets/images/MAP45THUMB-1.png";
import explore3 from "../../../assets/images/MATHUMB-1.png";
import explore1 from "../../../assets/images/KTTHUMB-1.png";
import {
  // FlexContainer,
  gray1,
  lightGreen1,
  pink1,
  pureDark3,
} from "../../../components/GlobalStyle";
import ImageCard from "../Cards/ImageCard";
import HeadingWithLine from "../Headings/HeadingWithLine";
import Carousel from "react-multi-carousel";
import { scrollToSection } from "../../../utils/helper";

const cardsData = [
  {
    id: 1,
    label: "KIDS AND TEENAGERS",
    image: explore1,
    background: lightGreen1,
    ref: "KidsAndTeens",
  },
  {
    id: 2,
    label: "FEMALE JIU JITSU",
    image: explore2,
    background: pink1,
    ref: "femaleJiuJitsu",
  },
  {
    id: 3,
    label: "MALE JIU JITSU",
    image: explore3,
    background: pureDark3,
    ref: "MaleJiu",
  },
  {
    id: 4,
    label: "NOGI",
    image: explore4,
    background: gray1,
    ref: "JiuJitsuLife",
  },
];

const Explore = () => {
  const cards = cardsData.map((card) => {
    return (
      <div key={card.id} onClick={() => scrollToSection(card.ref)}>
        <ImageCard
          key={card.id}
          id={card.id}
          btnBackground={card.background}
          btnLabel={card.label}
          image={card.image}
        />
      </div>
    );
  });

  const responsive = {
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
    <ExploreContainer className="pt-5 pb-4">
      <Container>
        <HeadingWithLine
          className={"explore_heading mb-5"}
          heading={`Explore The Brighton Marina Jiu Jitsu Academy Programs`}
        />

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
          {cards}
        </Carousel>
      </Container>
    </ExploreContainer>
  );
};

export default Explore;

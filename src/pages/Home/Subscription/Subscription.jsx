import React from "react";
import { SubscriptionStyled } from "./styles";
import { Container } from "react-bootstrap";
import HeadingWithLine from "../Headings/HeadingWithLine";
import Button from "../../../components/common/Button/Button";
import Carousel from "react-multi-carousel";
import { SubscriptionPlan } from "./data";

const Subscription = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

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
    <SubscriptionStyled className="py-5" id="membershipSection">
      <Container>
        <HeadingWithLine heading={"Our Membership Plan"}>
          <p className="mt-2">
            It is a long established fact that a reader will be distracted by
            the readable <br />
            content of a page when looking at it layout
          </p>
        </HeadingWithLine>
        <div className="container">
          <div className="subscription-card-row mt-4 gap-4">
            <Carousel
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
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="itemClass"
            >
              {SubscriptionPlan.map((c, idx) => (
                <div
                  style={{ background: c.color }}
                  key={c}
                  className={`subscription-card ${
                    idx % 2 === 0
                      ? "subscription-card-bg-even"
                      : "subscription-card-bg-odd"
                  }`}
                >
                  <div className="heading">
                    <h4>{c.planName}</h4>
                    <p>{c.plan}</p>
                  </div>
                  <div className="body">
                    <h3 className="price">{c.price}</h3>
                    <p className="description">{c.description}</p>
                    {c.feature.map((f, indx) => (
                      <ul className="features">
                        <li className="feature">
                          <img src={f.icon} alt="tick" />
                          {f.data}
                        </li>
                      </ul>
                    ))}
                  </div>
                  <div className="footer">
                    <Button onClick={() => handleClick(c.link)}>
                      {c.buttonText} <br />
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </SubscriptionStyled>
  );
};

export default Subscription;

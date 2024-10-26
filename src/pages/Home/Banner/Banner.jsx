import React from "react";
import { Row, Col } from "antd";
import { Container } from "react-bootstrap";

import bannerImg from "../../../assets/images/banner.jpeg";
import { BannerContainer } from "./styles";
import {
  FlexContainer,
  darkGreen1,
  pureDark5,
  fontFamilyMedium,
  fontFamilyRegular,
} from "../../../components/GlobalStyle";
import Button from "../../../components/common/Button/Button";

const Banner = () => {
  const handleClick = () => {
    // Redirect to the provided link
    window.open("https://kick.site/bkpqrm1i", "_blank");
  };

  return (
    <>
      <BannerContainer>
        <Container className="home_page_wrapper" id="homepage" style={{marginTop: "7.3rem"}}>
          <Row>
            <Col lg={{ span: 16 }} span={24} className="px-0">
              <img src={bannerImg} alt="banner" className="bannerImg" />
            </Col>
            <Col
              lg={{ span: 8 }}
              span={24}
              className="px-0 join_tour_section py-3"
            >
              <FlexContainer className="flex-column h-100 gap-2">
                <Button
                  className="text-white"
                  bgColor={pureDark5}
                  borderColor={"#ffffff7a"}
                  width="240px"
                  onClick={handleClick}
                >
                  1 Day Free Trail-SIGNUP Today
                </Button>
                <button
                  style={{
                    width: "240px",
                    height: "60px",
                    padding: "8px 6px 8px 6px",
                    gap: "10px",
                    borderRadius: "6px 6px 0px 0px",
                    border: "1px solid #ffffff7a",
                    opacity: " 0px",
                    fontFamily: fontFamilyRegular,
                    background: pureDark5,
                  }}
                  className="text-white"

                  // onClick={handleClick}
                >
                  Call To Book <br></br>
                  <span style={{ fontFamily: fontFamilyMedium }}>
                    07846997004
                  </span>
                </button>
              </FlexContainer>
            </Col>
          </Row>
          <Row className="get_uniform_section px-5">
            <Col md={15} sm={24} className="px-0">
              <h6 className="text-white  py-3 ">
                Start Your Jiu Jitsu Journey With A Complimentary
              </h6>
              <h3 className="text-white  pb-4 ">
                1 Day Trial When You Sign Up Today
              </h3>
            </Col>
            <Col md={9} sm={24} className="px-0 pb-md-0 pb-4">
              <FlexContainer className="h-100">
                <Button
                  className="text-white btn-book-intro"
                  bgColor={darkGreen1}
                  borderColor={darkGreen1}
                  onClick={handleClick}
                >
                  Click to claim yours now!
                </Button>
              </FlexContainer>
            </Col>
          </Row>
        </Container>
      </BannerContainer>
      <div>
      
      </div>
    </>
  );
};

export default Banner;

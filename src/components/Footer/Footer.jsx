import React from "react";
import { FooterStyled } from "./styles";
import { Container } from "react-bootstrap";

import footerBg from "../../assets/images/footer-bg.png";
import fbIcon from "../../assets/icons/ic_fb.png";
import instaIcon from "../../assets/icons/ic_insta.png";
import twitterIcon from "../../assets/icons/ic_twitter.png";
import ContactUs from "./ContactUs";
// import ContactForm from "./ContactForm";
const Footer = () => {
  return (
    <FooterStyled className="mt-5 mb-3" id="contactUsSection">
      <Container>
        <div className="footer-wrapper py-2">
          <div className="bg_img">
            <img src={footerBg} alt="" />
          </div>
          <div className="contact d-flex justify-content-between flex-wrap  ">
            <div className="contact-text-section">
              <div className="heading">
                <h3>Contact Us</h3>
                <h5>for more information</h5>
                <p>
                  Our friendly team members will reach out to you either via
                  email <br /> or phone, whichever method you prefer. Kindly
                  inform us of the most <br /> convenient time for us to contact
                  you.
                </p>
              </div>
              <div className="address d-block d-lg-none">
                <p>
                  27 The Waterfront, Marina Way, Brighton Marina, Brighton and
                  Hove, Brighton BN2 5WA
                </p>
              </div>
            </div>
            <div className="contact-form-section">
              <ContactUs />
              {/* <ContactForm /> */}
            </div>
          </div>
          <div className="address d-lg-block d-none position-absolute address-at-bottom">
            <p>
              27 The Waterfront, Marina Way, Brighton Marina, Brighton and Hove,
              Brighton BN2 5WA
            </p>
          </div>
        </div>
        {/* <div style={{ paddingTop: "100px" }}></div> */}
        <div className="social-media-row d-flex align-items-center justify-content-center gap-5 mt-5 flex-wrap">
          <div className="rights-reserved">
            <p>
              ©2024 Brighton Marina Jiu Jitsu Academy. All rights reserved.{" "}
            </p>
          </div>
          <div className="social-media-icons d-flex gap-3">
            <img src={fbIcon} alt="" />
            <img src={instaIcon} alt="" />
            <img src={twitterIcon} alt="" />
          </div>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

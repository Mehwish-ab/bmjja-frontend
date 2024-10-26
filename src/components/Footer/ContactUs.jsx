import React from "react";
import ContactModal from "./ContactModal";
import contactimage from "../../assets/images/contactimage.jpeg";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={contactimage}
        height="100px"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title mb-3">We're here for you!</h5>
        <p className="card-text mb-3" style={{ fontSize: "13px" }}>
          If you need help or have inquiries, feel free to reach out through
        </p>
        <button className="btn ">
          <ContactModal />
        </button>
      </div>
    </div>
  );
}

export default ContactUs;

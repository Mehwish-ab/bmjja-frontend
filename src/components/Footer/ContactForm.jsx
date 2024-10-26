import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { IoMdAlert } from "react-icons/io";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Form from "react-bootstrap/Form";
import Button from "../common/Button/Button";
import { BorderBottomOutlined, LoadingOutlined } from "@ant-design/icons";
import { SmallHeadingBlack } from "../GlobalStyle";
import ToggleButton from "./ToggleButton";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_xtl26ro", "template_d53tmld", form.current, {
        publicKey: "rMro0PHMnbToeSI6I",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Email sent successfully!");
          setLoading(false);
          setError(false);
          resetMsg();
        },
        (error) => {
          console.log("FAILED...", error);
          setMessage("Failed to send Email. Try again later!");
          setLoading(false);
          setError(true);
          resetMsg();
        }
      );
  };
  const [value, setValue] = useState();

  // remove msg after 5 seconds
  const resetMsg = () => {
    setTimeout(() => {
      setMessage(null);
      setError(false);
    }, 5000);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={sendEmail} ref={form}>
          <Form.Label style={{ fontSize: "15px" }}>
            NAME <span style={{ color: "#FF0000" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            // placeholder="NAME *"
            name="from_name"
            required
          />
          <Form.Label style={{ fontSize: "15px", marginTop: "5px" }}>
            EMAIL <span style={{ color: "#FF0000" }}>*</span>
          </Form.Label>

          <Form.Control
            type="EMAIL"
            // placeholder="Email *"
            name="reply_to"
            required
          />
          {/* <Form.Label style={{ fontSize: "15px" }}>
            PHONE NUMBER <span style={{ color: "#FF0000" }}>*</span>
          </Form.Label> */}

          {/* <Form.Control
            type="Phone Number"
            placeholder="Phone"
            name="phone_number"
            required
          /> */}
          <div className="d-flex">
            <PhoneInput
              initialValueFormat="national"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
            <div className="mt-4">
              <p style={{ fontSize: "14px" }}>SMS OPT-IN</p>
              <ToggleButton />
            </div>
          </div>
          <div style={{ fontSize: "13px", marginBottom: "5px" }}>
            <span>
              <IoMdAlert size={"1.1rem"} /> Integrated with test By opting in to
              SMS, the Person agrees to receive announcements and billing alerts
              from Brighton Marina Jiu Jitsu Academy.
            </span>
            <br />
            <br />
            <span>
              Standard messaging rates may apply. Messaging cadence may vary.
              Reply STOP to opt out.
            </span>
          </div>
          <Form.Label style={{ fontSize: "15px" }}>MESSAGE</Form.Label>
          <Form.Control
            as="textarea"
            // placeholder="MESSAGE"
            name="message"
            required
          />
          {message && (
            <SmallHeadingBlack
              className={`p-2 ${error ? "text-danger" : "text-success"}`}
            >
              {message}
            </SmallHeadingBlack>
          )}
          <Button
            type={"submit"}
            className={"ms-2"}
            width={"130px"}
            disable={loading}
          >
            {loading ? <LoadingOutlined /> : "SUBMIT"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;

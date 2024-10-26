import React from "react";
import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "../common/Button/Button";
import { fontFamilyRegular } from "../GlobalStyle";

const ContactForm = () => {
  return (
    <Container>
      <div className="contact-form-section">
        <Card>
          <Card.Body>
            <p className="text-center-align ">Book Free Intro Class</p>

            <Form.Control type="text" placeholder="First Name & Surname" />

            <Form.Control className="my-3" type="email" placeholder="Email" />
            <Form.Control className="my-3" type="number" placeholder="Phone" />
            <Form.Control
              className="my-3"
              type="Date&time"
              placeholder="Date & Time"
            />
            <Form.Control
              className="my-3"
              rows="3"
              as="textarea"
              placeholder="Message"
            />

            <Form.Group
              className="mb-3 ms-2"
              id="formGridCheckbox"
            ></Form.Group>
            <Button type="send" className={"ms-4"} width={"130px"}>
              Send
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ContactForm;

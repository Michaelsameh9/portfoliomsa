import React, { useState } from "react";
import "./contact.css";
import { Container, Row, Col, FloatingLabel, Form } from "react-bootstrap";

import Serge from "../images/Serge.jpg";
import logo from "../images/LOGO1.png";

import Validation from "./validation";
import Foter from "./footer";



import {Helmet} from "react-helmet";

function Contact() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState({})
    function heandleInput(event) {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setValues(newObj)
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));

    }
    return (
        <>
            <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CONTACT  website MichaelSameh</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <Row>
                    <Col>
                        <div className="logo">
                            <a href="/slider">
                                <img src={logo} alt="logo" className="bg-logo" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="content-site">
                <Row className="content-2">
                    <Col Col lg={6} md={5} className="child">
                        <h2 className="p-title">CONTACT SERGE RAMELLI</h2>
                        <p className="p-9">Let me know how I may help you</p>
                        <p className="p-9">I do my best to answer to everyone.</p>
                        <p className="p-9">Serge</p>
                        <form onSubmit={handleValidation}>
                            <div className="form-group">
                                {errors.name && <p className="errors">{errors.name}</p>}
                                <input type="Name" placeholder="Name*" className="name" onChange={heandleInput}></input>
                                {errors.email && <p className="errors">{errors.email}</p>}
                                <input type="Email" placeholder="Email address*" className="name" onChange={heandleInput}></input>
                            </div>
                            <div className="message">
                                {errors.message && <p className="errors">{errors.message}</p>}
                                <FloatingLabel controlId="floatingTextarea2" label="Please type your message here..." onChange={heandleInput}>
                                    <Form.Control
                                        as="textarea"
                                        className="message1"
                                        placeholder="Please type your message here..."
                                        style={{ height: '100px' }}
                                        type="message"
                                    />
                                </FloatingLabel>
                            </div>
                            <div className="btn">
                                <button className="btn-msg" type="submit">Send Message</button>
                            </div>
                        </form>
                    </Col>
                    <Col lg={5} xs={10} md={5}>
                        <div>
                            <img src={Serge} alt="Serge" className="bg-serge" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Foter/>
        </>
    )
}
export default Contact;
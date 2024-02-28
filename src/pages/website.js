import React from "react";
import "./website.css";
import { Col, Container, Row } from "react-bootstrap";

import ipad from "../images/ipad2.jpg";

import logo from "../images/LOGO1.png";
import Foter from "./footer";


import { Helmet } from "react-helmet";

function Wibsite() {
    return (
        <>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Get your own  website MichaelSameh</title>
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
                    <Col lg={5} xs={12} md={5} className="child">
                        <h2 className="p-title">WANT A PORTFOLIO WEBSITE THAT MAKES YOUR PHOTOGRAPHY </h2>
                        <h2 className="p-title">LOOK PROFESSIONAL?</h2>
                        <p className="p-7">Get your site designed, built and published in less than an hour of your time.</p>
                        <p className="p-8">✅   Pick from a large selection of beautiful templates</p>
                        <p className="p-8">✅   Manage your domain name and website in the same place</p>
                        <p className="p-8">Sign up and get 33% for the life of the account for a limited time</p>
                        <a href="https://click.slickpic.com/bespoke-plans?type=default&urlaid=103&source=default" className="a-2">Get Your Portfolio Website</a>

                    </Col>
                    <Col lg={6} xs={12} md={6} className="child-2">
                        <a href="https://click.slickpic.com/bespoke-plans?type=default&urlaid=103&source=default">
                            <img src={ipad} alt="ipad" className="img-5 laptop" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className="child-3">
                        <iframe width="100%" height="800" src="https://www.youtube.com/embed/DubI3pa5sik?si=JwHvud8KIl_JRD4f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
            <div className="to-ftr">
                <Foter />
            </div>
            <Foter />

        </>
    )
}
export default Wibsite;
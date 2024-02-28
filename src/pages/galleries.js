import React, { Fragment } from "react";
import './galleries.css';
import { Col, Container, Row } from "react-bootstrap";
import paris from "../images/paris/paris-2.jpg";
import italy from "../images/italy/italy-6.jpg";
import usa from "../images/usa/usa-3.jpg";
import landscapes from "../images/LANDSCAPES/landscapes-1.jpg";
import opera from "../images/Opera/opera-1.jpg";
import portraits from "../images/PORTRAITS/portraits-5.jpg";
import logo from "../images/LOGO1.png";
import Foter from "./footer";
import {Helmet} from "react-helmet";


function Galleries() {
    return (
        <>
            <Container fluid className="galleries">
            <Helmet>
                <meta charSet="utf-8" />
                <title>GALLERIES  website MichaelSameh</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <Row>
                    <Col lg={4} xs={4} md={4}>
                        <div className="logo">
                            <a href="/slider">
                                <img src={logo} alt="logo" className="bg-logo" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="galleries-1">
                <Row>
                    <Col>
                        <p className="p-1">Galleries</p>
                    </Col>
                </Row>
                <Row className="galler">
                    <Col lg={4} xs={4} md={4}>
                        <a href="/paris">
                            <p className="p-2">Paris</p>
                            <img src={paris} alt="paris" className="img4" />
                        </a>
                    </Col>
                    <Col lg={4} xs={4} md={4}>
                        <a href="/italy">
                            <p className="p-2">ITALY</p>
                            <img src={italy} alt="italy" className="img4" />
                        </a>
                    </Col>
                    <Col lg={4} xs={4} md={4}>
                        <a href="/usa">
                            <p className="p-2">USA</p>
                            <img src={usa} alt="usa" className="img4" />
                        </a>
                    </Col>
                    <Col lg={4} xs={4} md={4}>
                        <a href="/landscapes">
                            <p className="p-3">LANDSCAPES</p>
                            <img src={landscapes} alt="landscapes" className="img4" />
                        </a>
                    </Col>
                    <Col lg={4} xs={4} md={4}>
                        <a href="/opera">
                            <p className="p-2">OPERA</p>
                            <img src={opera} alt="opera" className="img4" />
                        </a>
                    </Col>
                    <Col lg={4} xs={4} md={4}>
                        <a href="/portraits">
                            <p className="p-2">PORTRAITS</p>
                            <img src={portraits} alt="portraits" className="img4" />
                        </a>
                    </Col>
                </Row>
            </Container>
            <Foter/>
        </>
    )
}
export default Galleries;
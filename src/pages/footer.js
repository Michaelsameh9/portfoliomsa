import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";

import logo2 from "../images/LOGO3.png";
function Foter() {
    return (
        <>
            <Container fluid className="foter">
                <Row>
                    <Col lg={12}>
                        <div className="content-ftr">
                            <a href="/slider">
                                <img src={logo2} alt="logo-footer" className="logo-ftr" />
                            </a>
                            <p className="p-ftr">Copyright © 2024 Michael Sameh</p>
                            <a href="https://www.slickpic.com/t/portfolio-website-248491" className="a-ftr">
                            Powered by SlickPic 
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Foter;
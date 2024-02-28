import React from "react";
import './prints.css';
import { Col, Container, Row } from "react-bootstrap";
import portfolio from "../images/paris/paris-11.jpg";
import york2 from "../images/usa/usa-12.jpg";
import paris2 from "../images/paris/paris-12.jpg";
import los from "../images/usa/usa-13.jpg";
import paris from "../images/paris/paris-13.jpg";
import york from "../images/usa/usa-14.jpg";
import venice from "../images/paris/venice.jpg";
import prin from "../images/paris/paris-15.jpg";
import logo from "../images/LOGO1.png";
import Foter from "./footer";



import { Helmet } from "react-helmet";

function Prints() {
    return (
        <>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>PORTFOLIO  website MichaelSameh</title>
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
            <Container fluid className="prints">
                <Row>
                    <Col>
                        <p className="p-4">PORTFOLIO</p>
                    </Col>
                </Row>
                <Row className="prints-1">
                    <Col lg={3} xs={12} md={12} className="cards">
                        <img src={portfolio} alt="portfolio" className="bg-card" />
                        <h3 className="h-3">WEB PORTFOLIO</h3>
                        <p className="p-5">
                            See my web gallery. Currently hosted on SlickPic, a collection of shots I have taken over the				  years of Paris, Venice and other landscape travel				  shots.
                        </p>
                        <p className="p-6">
                            You are on my Web Portfolio!
                        </p>
                    </Col>
                    <Col lg={3} className="cards">
                        <img src={york2} alt="NEW YORK" className="bg-card" />
                        <h3 className="h-3">NEW YORK</h3>
                        <p className="p-5">
                            With his fascinating photographic style, the French photographer and YouTube star, Serge				  Ramelli, shows us the changeable character of New York...
                        </p>
                        <a href="https://www.amazon.com/New-York-Serge-Ramelli/dp/396171181X/ref=sr_1_fkmrnull_4?keywords=serge+ramelli+New+York&qid=1553801678&s=gateway&sr=8-4-fkmrnull" className="a-1">Get it on Amazon</a>
                    </Col>
                    <Col lg={3} className="cards">
                        <img src={paris2} alt="PARIS" className="bg-card" />
                        <h3 className="h-3">PARIS</h3>
                        <p className="p-5">
                            In pastel shades and dazzling details like the palette of French Impressionism, Serge Ramelli				  presents a unique and personal photo homage to the City of Lights.
                        </p>
                        <a href="https://www.amazon.com/Paris-Serge-Ramelli/dp/3961711828/ref=sr_1_5?keywords=serge+ramelli+paris&qid=1553801631&s=gateway&sr=8-5" className="a-1">Get it on Amazon</a>
                    </Col>
                    <Col lg={3} className="cards">
                        <img src={los} alt="los-angeles" className="bg-card" />
                        <h3 className="h-3">LOS ANGELES</h3>
                        <p className="p-5">
                            Photographer Serge Ramelli turns his lens on the vast and complex coastal metropolis of Los				  Angeles, whose name "City of Angels" reflects its Spanish-Mexican influence...
                        </p>
                        <a href="https://www.amazon.com/Los-Angeles-Serge-Ramelli/dp/3961711143/ref=sr_1_1?ie=UTF8&qid=1538626447&sr=8-1&keywords=serge+ramelli+los+angeles" className="a-1">Get it on Amazon</a>
                    </Col>
                    <Col lg={3} className="cards">
                        <img src={paris} alt="paris" className="bg-card" />
                        <h3 className="h-3">PARISS</h3>
                        <p className="p-5">
                            My book about Paris.  It is the City of Light, love, and savoir vivre. And this world-class				  capital is surely one of the planet's most photographed destinations.
                        </p>
                        <a href="https://www.amazon.com/gp/product/3832732527/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=3832732527&linkCode=as2&tag=wwwphotoserge-20&linkId=XE46GZ7FWF7JCPPB" className="a-1">Get it on Amazon</a>
                    </Col>
                    <Col lg={3} className="cards">
                        <img src={york} alt="new-york" className="bg-card" />
                        <h3 className="h-3">NEW YORK</h3>
                        <p className="p-5">
                            My book about New York. Black-and-white urban photography has a unique effect: It can lend a				  historical feel or bring out perspectives and surfaces in a special way.
                        </p>
                        <a href="https://www.amazon.com/gp/product/3832732535/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=3832732535&linkCode=as2&tag=wwwphotoserge-20&linkId=FT35ULJN6L3AMRLY" className="a-1">Get it on Amazon</a>
                    </Col>
                    <Col lg={3} className="cards">
                        <img src={venice} alt="venice" className="bg-card" />
                        <h3 className="h-4">VENICE</h3>
                        <a href="https://www.amazon.com/Venice-Serge-Ramelli/dp/3961710260/ref=sr_1_fkmr1_3?ie=UTF8&qid=1538626447&sr=8-3-fkmr1&keywords=serge+ramelli+los+angeles" className="a-1">Get it on Amazon</a>
                    </Col>
                    <Col lg={3} className="cards">
                        <img src={prin} alt="prints" className="bg-card" />
                        <h3 className="h-4">FINE ART PRINTS</h3>
                        <a href="https://www.amazon.com/Venice-Serge-Ramelli/dp/3961710260/ref=sr_1_fkmr1_3?ie=UTF8&qid=1538626447&sr=8-3-fkmr1&keywords=serge+ramelli+los+angeles" className="a-1">Get it on Amazon</a>
                    </Col>
                </Row>
            </Container>
            <Foter />
        </>
    )
}
export default Prints;
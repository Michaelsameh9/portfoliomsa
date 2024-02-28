import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './slider.css';
import slid1 from "../images/paris/paris-2.jpg";
import slid2 from "../images/italy/italy-17.jpg";
import slid3 from "../images/usa/usa-2.jpg";
import slid4 from "../images/LANDSCAPES/landscapes-2.jpg";
import slid5 from "../images/PORTRAITS/portraits-2.jpg";
import slid6 from "../images/paris/paris-1.jpg";
import slid7 from "../images/italy/italy-3.jpg";
import slid8 from "../images/usa/usa-3.jpg";
import slid9 from "../images/LANDSCAPES/landscapes-3.jpg";
import slid10 from "../images/PORTRAITS/portraits-1.jpg";
import slid11 from "../images/paris/paris-4.jpg";
import slid12 from "../images/italy/italy-2.jpg";
import slid13 from "../images/usa/usa-5.jpg";
import slid14 from "../images/LANDSCAPES/landscapes-4.jpg";
import slid15 from "../images/PORTRAITS/portraits-3.jpg";
import slid16 from "../images/paris/paris-10.jpg";
import slid17 from "../images/italy/italy-8.jpg";
import slid18 from "../images/usa/usa-4.jpg";


import logoslid from "../images/LOGO 2.png";


import { Helmet } from "react-helmet";

function Slider() {
    const Data = [
        {
            "id": 1,
            "imge": slid1,

        },
        {
            "id": 2,
            "imge": slid2,

        },
        {
            "id": 3,
            "imge": slid3,

        },
        {
            "id": 4,
            "imge": slid4,

        },
        {
            "id": 5,
            "imge": slid5,
            "clasNa": "img2",

        },
        {
            "id": 6,
            "imge": slid6,

        },
        {
            "id": 7,
            "imge": slid7,
            "clasNa": "img1",


        },
        {
            "id": 8,
            "imge": slid8,

        },
        {
            "id": 9,
            "imge": slid9,
            "clasNa": "img1",


        },
        {
            "id": 10,
            "imge": slid10,
            "clasNa": "img9",

        },
        {
            "id": 11,
            "imge": slid11,

        },
        {
            "id": 12,
            "imge": slid12,
            "clasNa": "img9",

        },
        {
            "id": 13,
            "imge": slid13,
            "clasNa": "img1",

        },
        {
            "id": 14,
            "imge": slid14,

        },
        {
            "id": 15,
            "imge": slid15,
            "clasNa": "img1",

        },
        {
            "id": 16,
            "imge": slid16,
            "clasNa": "img9",

        },
        {
            "id": 17,
            "imge": slid17,

        },
        {
            "id": 18,
            "imge": slid18,
            "clasNa": "img9",

        },
    ]
    return (
        <>
            <Container className="logoslid">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HOME  website MichaelSameh</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Row>
                    <Col lg={4}>
                        <img src={logoslid} alt="logo" className="bgslid" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="slider">
                <Row className="img">
                    {Data.map((item) =>
                        <Col lg={4} xs={4} md={4} className={item.clasNa} key={item.id}>
                            <img src={item.imge} alt="paris" className="img3" />
                        </Col>
                    )}
                </Row>
            </Container>

        </>
    )
}
export default Slider;
import React, { useState } from "react";
import "./landscapes.css";
import { Col, Container, Row } from "react-bootstrap";

import italy1 from "../images/italy/italy-17.jpg";
import italy2 from "../images/italy/italy-3.jpg";
import italy3 from "../images/italy/italy-4.jpg";
import italy4 from "../images/italy/italy-6.jpg";
import italy5 from "../images/italy/italy-7.jpg";
import italy6 from "../images/italy/italy-5.jpg";
import italy7 from "../images/italy/italy-1.jpg";
import italy8 from "../images/italy/italy-10.jpg";
import italy9 from "../images/italy/italy-8.jpg";
import italy10 from "../images/italy/italy-11.jpg";
import italy11 from "../images/italy/italy-12.jpg";
import italy12 from "../images/italy/italy-13.jpg";
import italy13 from "../images/italy/italy-14.jpg";
import italy14 from "../images/italy/italy-16.jpg";
import italy15 from "../images/italy/italy-15.jpg";
import italy16 from "../images/italy/italy-9.jpg";
import italy17 from "../images/italy/italy-2.jpg";

import logo from "../images/LOGO1.png";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Foter from "./footer";



import {Helmet} from "react-helmet";




function Italy() {
    const Data = [
        {
            "id": 1,
            "imge": italy1,
            "cnm": "img-5",
        },
        {
            "id": 2,
            "imge": italy2,
            "cnm": "img-5",
        },
        {
            "id": 3,
            "imge": italy3,
            "cnm": "img-5",
        },
        {
            "id": 4,
            "imge": italy4,
            "cnm": "img-7",
        },
        {
            "id": 5,
            "imge": italy5,
            "cnm": "bgitay",
        },
        {
            "id": 6,
            "imge": italy6,
            "cnm": "img-5",
        },
        {
            "id": 7,
            "imge": italy7,
            "cnm": "img-5",
        },
        {
            "id": 8,
            "imge": italy8,
            "cnm": "img-6",
        },
        {
            "id": 9,
            "imge": italy9,
            "cnm": "img-6",
        },
        {
            "id": 10,
            "imge": italy10,
            "cnm": "img-7",
        },
        {
            "id": 11,
            "imge": italy11,
            "cnm": "img-5",
        },
        {
            "id": 12,
            "imge": italy12,
            "cnm": "bgitay",
        },
        {
            "id": 13,
            "imge": italy13,
            "cnm": "img-4",
        },
        {
            "id": 14,
            "imge": italy14,
            "cnm": "img-8",
        },
        {
            "id": 15,
            "imge": italy15,
            "cnm": "img-5",
        },
        {
            "id": 16,
            "imge": italy16,
            "cnm": "img-4",
        },
        {
            "id": 17,
            "imge": italy17,
            "cnm": "img-3",
            "name": "PHOTO-ITALY",
        },

    ]
    const [model, setModel] = useState(false);
    const [tempimge, setTempImgSrc] = useState("");

    const getImg = (imge) => {
        setTempImgSrc(imge);
        setModel(true);
    }
    const handleButtonClick = () => {
        setModel(false);
    };
    return (
        <>
            <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ITALY-Galleries  website MichaelSameh</title>
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
            <Container fluid className="p-p">
                <Row>
                    <Col>
                        <p className="p-1">ITALY</p>
                    </Col>
                </Row>
                <Row className="content-1">
                    <div className={model ? "model open" : "model"}>
                        <img src={tempimge} alt="galler" />
                        <FontAwesomeIcon onClick={handleButtonClick} className="closButon" icon={faSquareXmark} />
                    </div>
                    {Data.map((item) =>
                        <Col lg={4} xs={4} md={4}>
                            <a href="#galler" key={item.id} onClick={() => getImg(item.imge)}>
                                <img src={item.imge} alt="PhotoITALY" className={item.cnm} />
                            </a>
                        </Col>
                    )}

                </Row>
            </Container>
            <Foter/>
        </>
    )
}
export default Italy;
import React, { useState } from "react";
import "./landscapes.css";
import { Col, Container, Row } from "react-bootstrap";


import portraits1 from "../images/PORTRAITS/portraits-3.jpg";
import portraits2 from "../images/PORTRAITS/portraits-1.jpg";
import portraits3 from "../images/PORTRAITS/portraits-4.jpg";
import portraits4 from "../images/PORTRAITS/portraits-2.jpg";
import portraits5 from "../images/PORTRAITS/portraits-7.jpg";
import portraits6 from "../images/PORTRAITS/portraits-5.jpg";
import portraits7 from "../images/PORTRAITS/portraits-6.jpg";
import portraits8 from "../images/PORTRAITS/portraits-8.jpg";
import portraits9 from "../images/PORTRAITS/portraits-10.jpg";
import portraits10 from "../images/PORTRAITS/portraits-11.jpg";
import portraits11 from "../images/PORTRAITS/portraits-12.jpg";
import portraits12 from "../images/PORTRAITS/portraits-9.jpg";
import portraits13 from "../images/PORTRAITS/portraits-13.jpg";
import portraits14 from "../images/PORTRAITS/portraits-14.jpg";
import portraits15 from "../images/PORTRAITS/portraits-15.jpg";


import logo from "../images/LOGO1.png";





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Foter from "./footer";


import {Helmet} from "react-helmet";



function Portraits() {
    const Data = [
        {
            "id": 1,
            "imge": portraits1,
            "cnm": "img-5",
        },
        {
            "id": 2,
            "imge": portraits2,
            "cnm": "img-5",
        },
        {
            "id": 3,
            "imge": portraits3,
            "cnm": "img-5",
        },
        {
            "id": 4,
            "imge": portraits4,
            "cnm": "bgitay",
        },
        {
            "id": 5,
            "imge": portraits5,
            "cnm": "img-5",
        },
        {
            "id": 6,
            "imge": portraits6,
            "cnm": "bgitay",
        },
        {
            "id": 7,
            "imge": portraits7,
            "cnm": "img-2",
        },
        {
            "id": 8,
            "imge": portraits8,
            "cnm": "img-2",
        },
        {
            "id": 9,
            "imge": portraits9,
            "cnm": "img-2",
        },
        {
            "id": 10,
            "imge": portraits10,
            "cnm": "img-2",
        },
        {
            "id": 11,
            "imge": portraits11,
            "cnm": "img-2",
        },
        {
            "id": 12,
            "imge": portraits12,
            "cnm": "bgitay",
        },
        {
            "id": 13,
            "imge": portraits13,
            "cnm": "img-2",
        },
        {
            "id": 14,
            "imge": portraits14,
            "cnm": "img-2",
        },
        {
            "id": 15,
            "imge": portraits15,
            "cnm": "img-2",
        },
        {
            "id": 16,
            "imge": portraits3,
            "cnm": "img-2",
        },
        {
            "id": 17,
            "imge": portraits6,
            "cnm": "img-2",
        },
        {
            "id": 18,
            "imge": portraits1,
            "cnm": "img-2",
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
                <title>PORTRAITS-Galleries  website MichaelSameh</title>
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
                        <p className="p-1">PORTRAITS</p>
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
                                <img src={item.imge} alt="PhotoPORTRAITS" className={item.cnm} />
                            </a>
                        </Col>
                    )}

                </Row>
            </Container>
            <Foter/>
        </>
    )
}
export default Portraits;
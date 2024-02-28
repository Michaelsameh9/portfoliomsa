import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./landscapes.css";
import { Col, Container, Row } from "react-bootstrap";

////////// this import to gallery paris\\\\\\\\\\\
import paris1 from "../images/paris/paris-1.jpg";
import paris2 from "../images/paris/paris-2.jpg";
import paris3 from "../images/paris/paris-3.jpg";
import paris4 from "../images/paris/paris-5.jpg";
import paris5 from "../images/paris/paris-4.jpg";
import paris6 from "../images/paris/paris-6.jpg";
import paris7 from "../images/paris/paris-9.jpg";
import paris8 from "../images/paris/paris-10.jpg";
import paris9 from "../images/paris/paris-7.jpg";
import paris10 from "../images/paris/paris-8.jpg";
import paris11 from "../images/paris/paris-11.jpg";
import paris12 from "../images/paris/paris-12.jpg";
import paris13 from "../images/paris/paris-13.jpg";
import paris14 from "../images/paris/paris-14.jpg";

////// end to import gallery paris \\\\\\\\\\


import logo from "../images/LOGO1.png";




/////////this import to fontawesomeicon\\\\\\\\\\

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Foter from "./footer";

/////////end  import to fontawesomeicon\\\\\\\\\\

/////////this import to Helmet to change link wibsite\\\\\\\\\\


import {Helmet} from "react-helmet";



/////////end  import to Helmet \\\\\\\\\\


////////////fuction to data{id,images, classname to css, modal ,closebutton in modal }////////////
function Paris() {
    const Data = [
        {
            "id": 1,
            "imge": paris1,
            "cnm": "img-5",
        },
        {
            "id": 2,
            "imge": paris2,
            "cnm": "img-5",
        },
        {
            "id": 3,
            "imge": paris3,
            "cnm": "img-5",
        },
        {
            "id": 4,
            "imge": paris4,
            "cnm": "bgitay",
        },
        {
            "id": 5,
            "imge": paris5,
            "cnm": "img-5",
        },
        {
            "id": 6,
            "imge": paris6,
            "cnm": "img-5",
        },
        {
            "id": 7,
            "imge": paris7,
            "cnm": "bgitay",
        },
        {
            "id": 8,
            "imge": paris8,
            "cnm": "bgitay",
        },
        {
            "id": 9,
            "imge": paris9,
            "cnm": "img-5",
        },
        {
            "id": 10,
            "imge": paris10,
            "cnm": "img-5",
        },
        {
            "id": 11,
            "imge": paris11,
            "cnm": "img-5",
        },
        {
            "id": 12,
            "imge": paris12,
            "cnm": "img-5",
        },
        {
            "id": 13,
            "imge": paris13,
            "cnm": "img-8",
        },
        {
            "id": 14,
            "imge": paris14,
            "cnm": "img-5",
        },
        {
            "id": 15,
            "imge": paris10,
            "cnm": "img-5",
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
    //////////// end fuction to data{id,images, classname to css , modal ,closebutton in modal }////////////

    return (
        <>
            <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>PARIS-Galleries  website MichaelSameh</title>
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
                        <p className="p-1">PARIS</p>
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
                                <img src={item.imge} alt="PhotoPARIS" className={item.cnm} />
                            </a>
                        </Col>
                    )}

                </Row>
            </Container>
            <Foter/>
        </>
    )
}
export default Paris;
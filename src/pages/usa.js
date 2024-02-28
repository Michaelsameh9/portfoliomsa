import React, { useState } from "react";
import "./landscapes.css";
import { Col, Container, Row } from "react-bootstrap";


import usa1 from "../images/usa/usa-1.jpg";
import usa2 from "../images/usa/usa-5.jpg";
import usa3 from "../images/usa/usa-2.jpg";
import usa4 from "../images/usa/usa-6.jpg";
import usa5 from "../images/usa/usa-3.jpg";
import usa6 from "../images/usa/usa-7.jpg";
import usa7 from "../images/usa/usa-4.jpg";
import usa8 from "../images/usa/usa-8.jpg";
import usa9 from "../images/usa/usa-12.jpg";
import usa10 from "../images/usa/usa-9.jpg";
import usa11 from "../images/usa/usa-13.jpg";
import usa12 from "../images/usa/usa-10.jpg";
import usa13 from "../images/usa/usa-14.jpg";
import usa14 from "../images/usa/usa-11.jpg";
import usa15 from "../images/usa/usa-15.jpg";


import logo from "../images/LOGO1.png";


import { Helmet } from "react-helmet";






import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Foter from "./footer";




function Usa() {
    const Data = [
        {
            "id": 1,
            "imge": usa1,
            "cnm": "img-5",
        },
        {
            "id": 2,
            "imge": usa2,
            "cnm": "img-5",
        },
        {
            "id": 3,
            "imge": usa3,
            "cnm": "img-5",
        },
        {
            "id": 4,
            "imge": usa4,
            "cnm": "img-5",
        },
        {
            "id": 5,
            "imge": usa5,
            "cnm": "bgitay",
        },
        {
            "id": 6,
            "imge": usa6,
            "cnm": "img-5",
        },
        {
            "id": 7,
            "imge": usa7,
            "cnm": "img-5",
        },
        {
            "id": 8,
            "imge": usa8,
            "cnm": "img-5",
        },
        {
            "id": 9,
            "imge": usa9,
            "cnm": "img-5",
        },
        {
            "id": 10,
            "imge": usa10,
            "cnm": "img-7",
        },
        {
            "id": 11,
            "imge": usa11,
            "cnm": "img-8",
        },
        {
            "id": 12,
            "imge": usa12,
            "cnm": "img-5",
        },
        {
            "id": 13,
            "imge": usa13,
            "cnm": "img-7",
        },
        {
            "id": 14,
            "imge": usa14,
            "cnm": "img-5",
        },
        {
            "id": 15,
            "imge": usa15,
            "cnm": "img-5",
        },
        {
            "id": 16,
            "imge": usa4,
            "cnm": "img-5",
        },
        {
            "id": 17,
            "imge": usa7,
            "cnm": "bgitay",
        },
        {
            "id": 18,
            "imge": usa5,
            "cnm": "img-8",
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
                <title>USA-Galleries  website MichaelSameh</title>
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
                        <p className="p-1">UNITED STATES OF AMERICA</p>
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
                                <img src={item.imge} alt="PhotoUSA" className={item.cnm} />
                            </a>
                        </Col>
                    )}

                </Row>
            </Container>
            <Foter/>
        </>
    )
}
export default Usa;
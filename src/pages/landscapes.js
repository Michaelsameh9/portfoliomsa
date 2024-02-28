import React, { useState } from "react";
import "./landscapes.css";
import { Col, Container, Row } from "react-bootstrap";



import landscapes1 from "../images/LANDSCAPES/landscapes-1.jpg";
import landscapes2 from "../images/LANDSCAPES/landscapes-2.jpg";
import landscapes3 from "../images/LANDSCAPES/landscapes-3.jpg";
import landscapes4 from "../images/LANDSCAPES/landscapes-4.jpg";
import landscapes5 from "../images/LANDSCAPES/landscapes-5.jpg";
import landscapes6 from "../images/LANDSCAPES/landscapes-8.jpg";
import landscapes7 from "../images/LANDSCAPES/landscapes-15.jpg";
import landscapes8 from "../images/LANDSCAPES/landscapes-6.jpg";
import landscapes9 from "../images/LANDSCAPES/landscapes-7.jpg";
import landscapes10 from "../images/LANDSCAPES/landscapes-9.jpg";
import landscapes11 from "../images/LANDSCAPES/landscapes-10.jpg";
import landscapes12 from "../images/LANDSCAPES/landscapes-11.jpg";
import landscapes13 from "../images/LANDSCAPES/landscapes-12.jpg";
import landscapes14 from "../images/LANDSCAPES/landscapes-13.jpg";
import landscapes15 from "../images/LANDSCAPES/landscapes-14.jpg";


import logo from "../images/LOGO1.png";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Foter from "./footer";


import {Helmet} from "react-helmet";



function Landscapes() {
    const Data = [
        {
            "id": 1,
            "imge": landscapes2,
            "cnm": "img-5",
            "name": "PHOTO-LANDSCAPES",


        },
        {
            "id": 2,
            "imge": landscapes1,
            "cnm": "img-5",


        },
        {
            "id": 3,
            "imge": landscapes3,
            "cnm": "img-5",


        },
        {
            "id": 4,
            "imge": landscapes4,
            "cnm": "bgitay",


        },
        {
            "id": 5,
            "imge": landscapes5,
            "cnm": "img-5",

        },
        {
            "id": 6,
            "imge": landscapes6,
            "cnm": "bgitay",

        },
        {
            "id": 7,
            "imge": landscapes7,
            "cnm": "img-5",

        },
        {
            "id": 8,
            "imge": landscapes8,
            "cnm": "img-5",

        },
        {
            "id": 9,
            "imge": landscapes9,
            "cnm": "img-5",

        },
        {
            "id": 10,
            "imge": landscapes10,
            "cnm": "img-5",

        },
        {
            "id": 11,
            "imge": landscapes4,
            "cnm": "img-6",

        },
        {
            "id": 12,
            "imge": landscapes11,
            "cnm": "img-6",

        },
        {
            "id": 13,
            "imge": landscapes12,
            "cnm": "img-7",

        },
        {
            "id": 14,
            "imge": landscapes13,
            "cnm": "img-5",

        },
        {
            "id": 15,
            "imge": landscapes1,
            "cnm": "bgitay",

        },
        {
            "id": 16,
            "imge": landscapes14,
            "cnm": "img-7",

        },
        {
            "id": 17,
            "imge": landscapes15,
            "cnm": "img-6",

        },
        {
            "id": 18,
            "imge": landscapes1,
            "cnm": "img-5",

        },
        {
            "id": 19,
            "imge": landscapes8,
            "cnm": "img-8",

        },
        {
            "id": 120,
            "imge": landscapes7,
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
                <title>LANDSCAPES-Galleries  website MichaelSameh</title>
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
                        <p className="p-1">LANDSCAPES</p>
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
                                <img src={item.imge} alt={item.name} className={item.cnm} />
                            </a>
                        </Col>
                    )}

                </Row>
            </Container>
            <Foter/>
        </>
    )
}
export default Landscapes;
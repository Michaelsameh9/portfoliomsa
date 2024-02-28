import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Galleries from "./galleries";
import About from "./about";
import Contact from "./contact";
import Paris from "./paris";
import Italy from "./italy";
import Usa from "./usa";
import Landscapes from "./landscapes";
import Portraits from "./portraits";
import Slider from "./slider";
import Wibsite from "./website";
import Prints from "./prints";
import qr from "../images/PHONE-QR.png";
import qr2 from "../images/EMAIL-QR.png";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {

    const [model, setModel] = useState(false);
    const [tempimge, setTempImgSrc] = useState("");

    const getImg = (imge) => {
        setTempImgSrc(imge);
        setModel(true);
    }

    const handleButtonClick = () => {
        setModel(false);
    };
    const[isOpen,setIsOpen]= useState(false);

    const openMeun =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <Container fluid className="header">
            <Row>
                <Col xs lg="9">
                    <BrowserRouter>
                        <ul className={isOpen ? "open" :"nav-link2"}>
                            <li><a href="/galleries">Galleries</a>
                                <ul className="dropdown">
                                    <li><a href="/paris">Paris</a></li>
                                    <li><a href="/italy">Italy</a></li>
                                    <li><a href="/usa">USA</a></li>
                                    <li><a href="/landscapes">Landscapes</a></li>
                                    <li><a href="/portraits">Portraits</a></li>
                                </ul>
                            </li>
                            <li><a href="/booksAndPrints">Books and Prints</a></li>
                            <li><a href="/sameWebsite">Want the same website?</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="#modal" onClick={() => getImg(true)}><FontAwesomeIcon icon={faShareNodes} style={{ "--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff", }} /></a></li>
                            <div className={model ? "modell open" : "modell"}>
                                <p className="header-modal">
                                    Share Website
                                </p>
                                <nav className="body-modal">
                                    <ul className="link-model">
                                        <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="45" width="60" viewBox="0 0 448 512"><path fill="#FFD43B" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z" /></svg>
                                        </a></li>
                                        <li><a href="https://www.facebook.com/?locale=ar_AR"><svg xmlns="http://www.w3.org/2000/svg" height="45" width="60" viewBox="0 0 448 512"><path fill="#3e6193" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
                                        </a></li>
                                        <li><a href="https://twitter.com/?lang=ar"><svg xmlns="http://www.w3.org/2000/svg" height="45" width="60" viewBox="0 0 448 512"><path fill="#345989" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg>
                                        </a></li>
                                        <li><a href="https://web.whatsapp.com/"><svg xmlns="http://www.w3.org/2000/svg" height="45" width="60" viewBox="0 0 448 512"><path fill="#00d604" d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" /></svg>
                                        </a></li>
                                        <li><a href="https://www.instagram.com/?hl=ar"><svg xmlns="http://www.w3.org/2000/svg" height="45" width="60" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                        </a></li>
                                    </ul>
                                </nav>
                                <div className="qr-scan">
                                    <img src={qr} alt="QR-namber" className="qr" />
                                    <p className="p-q"> QR FROM NAMBER</p>
                                    <img src={qr2} alt="QR-email" className="qr" />
                                    <p className="p-q"> QR FROM EMAIL</p>
                                </div>
                                <FontAwesomeIcon onClick={handleButtonClick} className="closButon" icon={faSquareXmark} />
                            </div>
                            
                        </ul>
                        <Routes>
                            <Route path="/" element={<Slider />} />
                            <Route path="/galleries" element={<Galleries />} />
                            <Route path="/paris" element={<Paris />} />
                            <Route path="/italy" element={<Italy />} />
                            <Route path="/usa" element={<Usa />} />
                            <Route path="/landscapes" element={<Landscapes />} />
                            <Route path="/portraits" element={<Portraits />} />

                            <Route path="/sameWebsite" element={< Wibsite />} />
                            <Route path="/booksAndPrints" element={<Prints />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/slider" element={<Slider />} />
                        </Routes>
                    </BrowserRouter>
                </Col>
                <Col className="social-media">
                    <nav className="nav-link">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/?locale=ar_AR"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="15" viewBox="0 0 320 512"><path fill="#d9dbde" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/?hl=ar"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="15.25" viewBox="0 0 448 512"><path fill="#b8babc" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" className="youtube-hov"><svg xmlns="http://www.w3.org/2000/svg" height="60" width="20" viewBox="0 0 576 512"><path fill="#d6d6d6" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg></a>
                            </li>
                            <li className="btn-meun" onClick={openMeun}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="15.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            </li>
                        </ul>
                    </nav>

                </Col>
            </Row>
        </Container>
    )
}
export default Header;
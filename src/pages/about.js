import React from "react";
import "./about.css";
import { Col, Container, Row } from "react-bootstrap";

import About1 from "../images/ABOUT/about-1.jpg";
import About2 from "../images/ABOUT/about-2.jpg";
import About3 from "../images/ABOUT/about-3.jpg";
import About4 from "../images/ABOUT/about-4.jpg";
import About5 from "../images/ABOUT/about-5.jpg";
import About6 from "../images/ABOUT/about-6.jpg";
import About7 from "../images/ABOUT/about-7.jpg";
import About8 from "../images/ABOUT/about-8.jpg";
import About9 from "../images/ABOUT/about-9.jpg";
import About10 from "../images/ABOUT/about-10.jpg";
import About11 from "../images/ABOUT/about-11.jpg";
import About12 from "../images/ABOUT/about-12.jpg";
import About13 from "../images/ABOUT/about-13.jpg";
import About14 from "../images/ABOUT/about-14.jpg";
import About15 from "../images/ABOUT/about-15.jpg";
import About16 from "../images/ABOUT/about-16.jpg";
import About17 from "../images/ABOUT/about-17.jpg";
import About18 from "../images/ABOUT/about-18.jpg";

import logo from "../images/LOGO1.png";
import Foter from "./footer";


import {Helmet} from "react-helmet";





const Data = [
    {
        "id": 2,
        "gallery": About2,
        "title": "This is one of the first photo I did in Paris that I like",

    },
    {
        "id": 3,
        "gallery": About3,
        "title": "The first shot of the Pont Neuf that I got that I really liked. I have shot this bridge over 80 times with many different technics.",

    },
    {
        "id": 4,
        "gallery": About4,
        "title": "A selective color effect.",
        "title2": "I started spending over twenty hours per week studying photography and post processing. I discovered Scott Kelby  and decided that he was going to be my mentor, years later I had the honor to become his friend.Since then I never stopped learning. With time and competence, I started teaching.",
    },
    {
        "id": 5,
        "gallery": About5,
        "title": "The Conciergerie Paris.",
        "title2": "I specialize in landscapes, cities and interior designs. I love to learn new photography and retouching techniques and share them on my Youtube channel:",
        "link1": "PHOTOGRAPHY,LIGHTROOM & PHOTOSHOP TIPS BY SERGE RAMELLI - CLICK HERE",
        "ref1": "https://www.youtube.com/channel/UCyaDDjiNgWX-uRXOx6LPsYQ",
        "title3": "I like very dramatic type photos, inspired by world famous movies such as Amelie Poulain by Jean Pierre Jeunet, Angela of Luc Besson, War Horse by Steven Spielberg,Gone with the wind by Victor Fleming and Gladiator by Ridley Scott. I cannot help myself but when I take a portrait I try to make it into a movie poster. In short I like the drama look.",
        "title4": "Right at the beginning I also became a big fan of Trey aRatcliff's work, we share the same vision of a very colorful and dramatic beautiful planet.",
        "link2": "http://www.stuckincustoms.com/",
        "ref2": "https://stuckincustoms.com/",

    },
    {
        "id": 6,
        "gallery": About6,
        "title": "Sun rise on the Saint Marco Plaza in Venice Italy.",

    },
    {
        "id": 7,
        "gallery": About7,
        "title": "The Carrousel at the Louvre.",

    },
    {
        "id": 8,
        "gallery": About8,

    },
    {
        "id": 9,
        "gallery": About9,
        "title": "My favorite stairs in Montmartre, I came back many times to this spot to get the right sunset.",
        "title2": "I shot a full series of photos for about 8 years in Paris where every shot would look like they came straight out of a movie. Some of my photos are heavily retouched, some not. What matters to me is                the emotional impact, do people get something out of it or not?",

    },
    {
        "id": 10,
        "gallery": About10,
        "title": "My favorite stairs in Montmartre, I came back many times to this spot to get the right sunset.The Opera Garnier from the roof the Galerie Lafayette.",
        "title2": "I started to shoot with the Canon 5D Mark 2 and the Canon 7D. For my landscapes I mainly use the Canon 17-40 F4, sometimes the Canon 24-70 2,8. When I shoot portraits I also use the Canon 70-200 F4. But I would say I work 90% of the time with the 17-40. Since two years I totally switch to the Sony A7r after watching Trey Ratcliff's videos. I loved the idea of having a light camera that you can travel with and that has a better dynamic range than the 5D Mark III. I shoot mostly sunsets and do a lot of hiking, so having to carry light gear was essential. I continue to use the Sony A7R, A7R II and for videos the Sony A7S. I shoot mainly with the 17-35, 24-70.",

    },
    {
        "id": 11,
        "gallery": About11,
        "title": "A panorama of the McWays Fall in Big Sur California.",
        "title2": "I retouch most of my photos with Lightroom, and if I really need to I do the finishing touches in Photoshop. My workflow has really evolved from a lot of Photoshop to 90% Lightroom and 10% Photoshop.",
        "title3": "When I want to do HDR I now use Aurora HDR PRO. I love the ability to tone map different parts of the photos:",
        "link2": "http://aurorahdr.com/masters/serge-ramelli",
        "ref2": "https://skylum.com/ambassadors",


    },
    {
        "id": 12,
        "gallery": About12,
        "title": "Santa Monica state park California with Aurora HDR pro.",

    },
    {
        "id": 13,
        "gallery": About13,
        "title": "The Alexander III bridge in Paris with Aurora HDR Pro.",
        "title2": "I also shoot a lot with the ND 1000 filter for long exposures effects. I love what it does to the cloud and the water, usually it works better on black and white shots.",

    },
    {
        "id": 14,
        "gallery": About14,
        "title": "Walt Disney Concert Hall, eight long exposures photography stitched together.",
        "title2": "But sometimes you get some happy accidents with cloudy sunsets.",

    },
    {
        "id": 15,
        "gallery": About15,
        "title": "Notre Dame long exposure.",
        "title2": "I also love to play as an actor and direct movies, I shot three short films as a director and just completed shooting a movie in which I am the lead actor called The Hollywouldn'ts . It's the story of a homeless French actor and a struggling actress band together with a group of misfits in an Alice in Wonderlandesque journey through tinsel town as they struggle to make a film with no money but plenty of attitude.  The movie should come out by the end of this year. It was an amazing experience. Crossing my fingers that people will like it!",

    },
    {
        "id": 16,
        "gallery": About16,
        "title": "This is where I'm now most of time..",
        "titleH": "My favorite movies of all times are:",
        "text1": "— Star Wars",
        "text2": "— Indiana Jones",
        "text3": "— Back to the Future",
        "text4": "— Gladiator",
        "text5": "— Life is Beautiful from Roberto Benigni",
        "text6": "— L'as des As with Jean Paul Belmondo",
        "text7": "— La Vérité si je Mens",
        "text8": "— Enter the Dragon",
        "text9": "— La Grande Vadrouille with Luis de Funes",
        "text10": "— Amistad",
        "text11": "— Love Actually",

    },
    {
        "id": 17,
        "gallery": About17,
        "title": "Shooting the milky way in the Joshua Tree National Park.",
        "titleH": "My favorite movies of all times are:",
        "text1": "— Firefly",
        "text2": "— Entourage",
        "text3": "—Suits",
        "text4": "— Game of Thrones",
        "text5": "— Friends",
        "text6": "— Big Bang Theory",
        "titleD": "My Favorite Books",
        "text7": "— Dianetics by L. Ron Hubbard",
        "text8": "— Mille vie vaux mieux qu’une by Jean Paul Belmondo",
        "text9": "— George Lucas a Life by Brian Jay Jones",
        "text10": "— Creativity Inc by Ed Catmull",
        "text11": "— Total Recall by Arnold Schwarzenegger",
        "text12": "— Audiar par Audiar",

    },
    {
        "id": 18,
        "gallery": About18,
        "title": "A view of downtown Los Angeles taken from the Griffith Park.",
        "titleH": "I think that creating images for people to enjoy is the most amazing job in the world :-)",
        "title2": "Serge Ramelli",

    },
]
function About() {
    return (
        <>
            <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ABOUT  website MichaelSameh</title>
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
            <Container fluid className="content-site">
                <Row className="content-4">
                    <Col className="content-3" lg={10}>
                        <p className="p-1">ABOUT</p>
                    </Col>
                </Row>
                <Row className="contact-5">
                    <Col>
                        <img src={About1} alt="Serge" className="img-about" />
                        <div className="title-2">
                            <span className="s-1">
                                As a landscape and urban photographer I'm happy to say that today I have accomplished a few things that I'm proud of:
                            </span>
                            <span className="s-1">
                                - My fine art photographies are being sold in one of the largest gallery networks in the world called Yellow Korner. They have have 85 galleries around the world, you can see my work and the locations here:
                            </span>
                            < a href="http://www.yellowkorner.com/artistes/325/serge-ramelli.aspx" className="link-about">
                                http://www.yellowkorner.com/artistes/325/serge-ramelli.aspx
                            </a>
                            <span className="s-1">
                                With the Publisher Teneues I have published 6 coffee table book on Paris, New York, Venise, Los Angeles and soon Barcelona
                            </span>
                            < a href="http://photoserge.com/portfolio" className="link-about">
                                http://photoserge.com/portfolio
                            </a>
                            <span className="s-1">
                                - I host a Youtube Channel that has over 600 000 subscribers. Making it the number one channel on Lightroom in the world and number 4 on Photoshop and number 7 on photography in general:
                            </span>
                            < a href="http://www.youtube.com/sergeramelliphotography" className="link-about">
                                http://www.youtube.com/sergeramelliphotography
                            </a>
                            <span className="s-1">
                                How did this all start?
                            </span>
                            <span className="s-1">
                                In 2005 a friend of mine showed me what you can do with Photoshop and turned an ok portrait into a magazine cover. I was amazed, since my earliest childhood I wanted to create art, images and videos. What I like about it, is that all it took to create a great piece of art was a camera and a software, the rest was up to my skills and imagination.
                            </span>

                        </div>
                    </Col>
                </Row>
                {Data.map((r) =>
                    <Row className="contact-5">
                        <Col lg={12}>
                            <img src={r.gallery} alt="Serge" className="img-about" />
                            <div className="title-2">
                                <span className="s-1">
                                    {r.title}
                                </span>

                                <span className="s-2">
                                    {r.titleH}
                                </span>
                                <span className="s-1">
                                    {r.title2}
                                </span>
                                <span className="s-3">
                                    {r.text1}
                                </span>
                                <span className="s-3">
                                    {r.text2}
                                </span>
                                <span className="s-3">
                                    {r.text3}
                                </span>
                                <span className="s-3">
                                    {r.text4}
                                </span>
                                <span className="s-3">
                                    {r.text5}
                                </span>
                                <span className="s-3">
                                    {r.text6}
                                </span>
                                <span className="s-2">
                                    {r.titleD}
                                </span>
                                <span className="s-3">
                                    {r.text7}
                                </span>
                                <span className="s-3">
                                    {r.text8}
                                </span>
                                <span className="s-3">
                                    {r.text9}
                                </span>
                                <span className="s-3">
                                    {r.text10}
                                </span>
                                <span className="s-3">
                                    {r.text11}
                                </span>
                                <span className="s-3">
                                    {r.text12}
                                </span>

                                <a href={r.ref1} className="link-about">{r.link1}</a>
                                <span className="s-1">{r.title3}</span>
                                <span className="s-1">{r.title4}</span>
                                <a href={r.ref2} className="link-about">{r.link2}</a>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
            <Foter/>
        </>
    )
}
export default About;
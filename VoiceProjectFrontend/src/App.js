import React, { Component, useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Main />
            <FooterBar />
        </div>
    );
}

const infoBlocks = [
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        heading:
        {
            primary: "First featurette heading. ",
            secondary: "It'll blow your mind."
        },
        text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
        order: {
            first: 1,
            second: 2
        }
    },
    {
        image: {
            src: "./images/image5.jpg",
            alt: "Generic placeholder image"
        },
        heading:
        {
            primary: "Oh yeah, it's that good. ",
            secondary: "See for yourself."
        },
        text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
        order: {
            first: 2,
            second: 1
        }
    },
    {
        image: {
            src: "./images/image6.jpg",
            alt: "Generic placeholder image"
        },
        heading:
        {
            primary: "And lastly, this one. ",
            secondary: "Checkmate."
        },
        text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
        order: {
            first: 1,
            second: 2
        }
    },
]

const headingBlocks = [
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        heading: "Heading",
        text: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        button: {
            text: "View details"
        }
    },
    {
        image: {
            src: "./images/image5.jpg",
            alt: "Generic placeholder image"
        },
        heading: "Heading",
        text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        button: {
            text: "View details"
        }
    },
    {
        image: {
            src: "./images/image6.jpg",
            alt: "Generic placeholder image"
        },
        heading: "Heading",
        text: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        button: {
            text: "View details"
        }
    },
]

const slides = [
    {
        image: {
            src: "./images/image.jpg",
            alt: "First slide"
        },
        label: "First slide label",
        text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        image: {
            src: "./images/image2.jpg",
            alt: "Second slide"
        },
        label: "Second slide label",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        image: {
            src: "./images/image3.jpg",
            alt: "Third slide"
        },
        label: "Third slide label",
        text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
];

const thumbnailsCollection = [
    {
        url: 'https://www.youtube.com/watch?v=KRvv0QdruMQ',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=lheapd7bgLA',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=xAUJYP8tnRE',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=XFqn3uy238E',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=F1Hq8eVOMHs',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=LmpuerlbJu0',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=xaQJbozY_Is',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=yiw6_JakZFc',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=1-NxodiGPCU',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
]

const Main = () => (
    <Routes>
        <Route path='/' element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/album' element={<Album thumbnailsCollection={thumbnailsCollection}/>}></Route>
        {/*<Route path='/news' element={<News />}></Route>*/}
    </Routes>
);

const NavigationBar = () => (
    <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
            {/*<Navbar.Brand href="/news">News</Navbar.Brand>*/}
            <Nav className="me-auto">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-link" to="/album">
                    Album
                </NavLink>
            </Nav>
        </Container>
    </Navbar>
)

const FooterBar = () => (
    <footer class="text-muted">
        <Container>
            <Row>
                <Col>
                    &copy; 2022 Valentine Gladyshko &#183; <a href="https://github.com/ValentineGladyshko">GitHub</a> &#183; <a href="#">Terms</a>
                </Col>
                <Col sm={2}>
                    <a href="#">Back to top</a>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default App;

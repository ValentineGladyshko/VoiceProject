import React, { Component, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Main />
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

const Main = () => (
    <Routes>
        <Route path='/' element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/album' element={<Album />}></Route>
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

export default App;

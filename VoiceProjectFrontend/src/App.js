import React, { Component, useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';
import NavigationBar from './pages/NavigationBar';
import headingBlocks from './json/headingBlocks.json';
import infoBlocks from './json/infoBlocks.json';
import thumbnailsCollection from './json/thumbnailsCollection.json';
import slides from './json/slides.json';
import navLinks from './json/navLinks.json';

function App() {
    return (
        <div className="App">
            <NavigationBar navLinks={navLinks}/>
            <Main />
            <FooterBar />
        </div>
    );
}

const Main = () => (
    <Routes>
        <Route path='/' element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/album' element={<Album thumbnailsCollection={thumbnailsCollection} />}></Route>
    </Routes>
);

const FooterBar = () => (
    <footer className="text-muted">
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

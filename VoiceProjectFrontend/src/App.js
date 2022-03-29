import React, { Component, useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';
import headingBlocks from './json/headingBlocks.json';
import infoBlocks from './json/infoBlocks.json';
import thumbnailsCollection from './json/thumbnailsCollection.json';
import slides from './json/slides.json';

headingBlocks = [...headingBlocks];
infoBlocks = [...infoBlocks];
thumbnailsCollection = [...thumbnailsCollection];
slides = [...slides];

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Main />
            <FooterBar />
        </div>
    );
}

const Main = () => (
    <Routes>
        <Route path='/' element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/album' element={<Album thumbnailsCollection={thumbnailsCollection} />}></Route>
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

import React, { Component, useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';
import NavigationBar from './pages/NavigationBar';
import FooterBar from './pages/FooterBar';
import headingBlocks from './json/headingBlocks.json';
import infoBlocks from './json/infoBlocks.json';
import thumbnailsCollection from './json/thumbnailsCollection.json';
import slides from './json/slides.json';
import navLinks from './json/navLinks.json';
import footerContent from './json/footerContent.json';

function App() {
    return (
        <div className="App">
            <NavigationBar navLinks={navLinks}/>
            <Main />
            <FooterBar text1={footerContent.text1} text2={footerContent.text2} link1={footerContent.link1} link2={footerContent.link2} link3={footerContent.link3}/>
        </div>
    );
}

const Main = () => (
    <Routes>
        <Route path='/' element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/album' element={<Album thumbnailsCollection={thumbnailsCollection} />}></Route>
    </Routes>
);

export default App;

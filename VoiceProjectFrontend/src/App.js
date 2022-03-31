import { React, Component, useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';
import NavigationBar from './pages/NavigationBar';
import FooterBar from './pages/FooterBar';
import headingBlocks from './json/headingBlocks.json';
import infoBlocks from './json/infoBlocks.json';
import thumbnailsCollection from './json/thumbnailsCollection.json';
import slides from './json/slides.json';
import slides1 from './json/slides1.json';
import navLinksUa from './json/ua/navLinks.json';
import navLinksRu from './json/ru/navLinks.json';
import navLinksEn from './json/en/navLinks.json';
import footerContent from './json/footerContent.json';

function App() {
    return (<div className="App">
        <Routes>
            <Route path='/' element={<Navigate to="/en" replace />}></Route>
            <Route path='/ua' element={<Main navLinks={navLinksUa} footerContent={footerContent} />}>
                <Route index element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />} />
                <Route path="album" element={<Album thumbnailsCollection={thumbnailsCollection} />} />
            </Route>
            <Route path='/ru' element={<Main navLinks={navLinksRu} footerContent={footerContent} />}>
                <Route index element={<Home slides={slides1} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />} />
                <Route path="album" element={<Album thumbnailsCollection={thumbnailsCollection} />} />
            </Route>
            <Route path='/en' element={<Main navLinks={navLinksEn} footerContent={footerContent} />}>
                <Route index element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />} />
                <Route path="album" element={<Album thumbnailsCollection={thumbnailsCollection} />} />
            </Route>
        </Routes>
    </div>);
}



function Main(props) {
    return (
        <>
            <NavigationBar navLinks={props.navLinks} />
            <Outlet />
            <FooterBar footerContent={props.footerContent} />
        </>
    );
}

export default App;

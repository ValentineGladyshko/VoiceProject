import { React, Component, useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';
import NavigationBar from './pages/NavigationBar';
import FooterBar from './pages/FooterBar';

import navLinksUa from './json/ua/navLinks.json';
import navLinksRu from './json/ru/navLinks.json';
import navLinksEn from './json/en/navLinks.json';

import albumContentEn from './json/en/albumContent.json';
import homeContentEn from './json/en/homeContent.json';
import footerContentEn from './json/en/footerContent.json';

function App() {
    return (<div className="App">
        <Routes>
            <Route path='/' element={<Navigate to="/en" replace />}></Route>
            <Route path='/ua' element={<Main navLinks={navLinksUa} footerContent={footerContentEn} />}>
                <Route index element={<Home homeContent={homeContentEn} />} />
                <Route path="album" element={<Album albumContent={albumContentEn} />} />
            </Route>
            <Route path='/ru' element={<Main navLinks={navLinksRu} footerContent={footerContentEn} />}>
                <Route index element={<Home homeContent={homeContentEn} />} />
                <Route path="album" element={<Album albumContent={albumContentEn} />} />
            </Route>
            <Route path='/en' element={<Main navLinks={navLinksEn} footerContent={footerContentEn} />}>
                <Route index element={<Home homeContent={homeContentEn} />} />
                <Route path="album" element={<Album albumContent={albumContentEn} />} />
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

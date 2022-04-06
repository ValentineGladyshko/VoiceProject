import { React, Component, useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from './pages/Home';
import Album from './pages/Album';
import NavigationBar from './pages/NavigationBar';
import FooterBar from './pages/FooterBar';
import NotFound from './pages/NotFound';
import Chronometer from './pages/Chronometer';

import navLinksUa from './json/ua/navLinks.json';
import navLinksRu from './json/ru/navLinks.json';
import navLinksEn from './json/en/navLinks.json';

import notFoundContentUa from './json/ua/notFoundContent.json';
import notFoundContentRu from './json/ru/notFoundContent.json';
import notFoundContentEn from './json/en/notFoundContent.json';

import chronometerContentEn from './json/en/chronometerContent.json';

import albumContentUa from './json/ua/albumContent.json';
import albumContentRu from './json/ru/albumContent.json';
import albumContentEn from './json/en/albumContent.json';

import homeContentUa from './json/ua/homeContent.json';
import homeContentRu from './json/ru/homeContent.json';
import homeContentEn from './json/en/homeContent.json';

import footerContentUa from './json/ua/footerContent.json';
import footerContentRu from './json/ru/footerContent.json';
import footerContentEn from './json/en/footerContent.json';

function App() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        
        if (hash === '') {
            window.scrollTo(0, 0);
        }

        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const position = element.style.position;
                    const top = element.style.top;
                    element.style.top = '-70px';
                    element.style.position = 'relative';
                    element.scrollIntoView({ behavior: "smooth" });
                    element.style.position = position;
                    element.style.top = top;
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return (<div className="App d-flex flex-column">
        <Routes>
            <Route path='/' element={<Navigate to="/en" replace />}></Route>
            <Route path='/ua' element={<Main navLinks={navLinksUa} footerContent={footerContentUa} />}>
                <Route index element={<Home homeContent={homeContentUa} />} />
                <Route path="album" element={<Album albumContent={albumContentUa} />} />
                <Route path="chronometer" element={<Chronometer chronometerContent={chronometerContentEn}/>} />
                <Route path="*" element={<NotFound notFoundContent={notFoundContentUa}/>} />
            </Route>
            <Route path='/ru' element={<Main navLinks={navLinksRu} footerContent={footerContentRu} />}>
                <Route index element={<Home homeContent={homeContentRu} />} />
                <Route path="album" element={<Album albumContent={albumContentRu} />} />
                <Route path="chronometer" element={<Chronometer chronometerContent={chronometerContentEn} />} />
                <Route path="*" element={<NotFound notFoundContent={notFoundContentRu}/>} />
            </Route>
            <Route path='/en' element={<Main navLinks={navLinksEn} footerContent={footerContentEn} />}>
                <Route index element={<Home homeContent={homeContentEn} />} />
                <Route path="album" element={<Album albumContent={albumContentEn} />} />
                <Route path="chronometer" element={<Chronometer chronometerContent={chronometerContentEn} />} />
                <Route path="*" element={<NotFound notFoundContent={notFoundContentEn}/>} />
            </Route>
            <Route path="*" element={<Navigate to="/en" replace />} />
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

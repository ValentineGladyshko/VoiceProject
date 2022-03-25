import React, { Component, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Main />
        </div>
    );
}

const Main = () => (
    <Routes>
        <Route path='/' element={<Home />}></Route>
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
            </Nav>
        </Container>
    </Navbar>
)

export default App;

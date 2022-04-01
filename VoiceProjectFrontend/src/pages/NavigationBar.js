import { React, Component, useState } from 'react';
import { Container, Nav, Navbar, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(props) {

    const languages = [
        { name: 'Ua', href: '/ua' },
        { name: 'Ru', href: '/ru' },
        { name: 'En', href: '/en' },
    ];

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Nav className="me-auto">
                    <NavLinks navLinks={props.navLinks} />
                </Nav>
                <Nav>
                    <NavLink to="/ua" className="d-flex nav-link py-0">
                        <i className="bi bi-tiktok my-auto" style={{ fontSize: 22 }}></i>
                    </NavLink>
                    <NavLink to="/ru" className="d-flex nav-link py-0">
                        <i className="bi bi-instagram my-auto" style={{ fontSize: 22 }}></i>
                    </NavLink>
                    <NavLink to="/ua" className="nav-link">
                        <i className="bi bi-tiktok"></i>
                    </NavLink>
                    <NavLink to="/ru" className="nav-link">
                        <i className="bi bi-instagram"></i>
                    </NavLink>
                    {languages.map((language) => (
                        <NavLink
                            key={language.name}
                            to={language.href}
                            className="nav-link"
                        >
                            {language.name}
                        </NavLink>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
}

function NavLinks(props) {
    return (
        <>
            {props.navLinks.map((row, index) =>
                <NavLink key={index} className="nav-link" to={row.link}>
                    {row.text}
                </NavLink>)
            }
        </>
    );
}

export default NavigationBar
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
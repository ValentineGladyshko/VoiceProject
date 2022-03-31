import { React, Component, useState } from 'react';
import { Container, Nav, Navbar, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks: props.navLinks
        }

        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }

    handleLanguageChange(language) {
        this.props.onLanguageChange(language);
    }

    render() {
        const languages = [
            { name: 'Ua', value: 'ua', href: '/ua' },
            { name: 'Ru', value: 'ru', href: '/ru' },
            { name: 'En', value: 'en', href: '/en' },
        ];

        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav className="me-auto">
                        <NavLinks navLinks={this.props.navLinks} />
                    </Nav>
                    <Nav>
                        {languages.map((language, index) => (
                            <NavLink
                                key={index}
                                to={language.href}
                                className="nav-link"
                                onClick={() => this.handleLanguageChange(language.value)}
                            >
                                {language.name}
                            </NavLink>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        );
    }
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
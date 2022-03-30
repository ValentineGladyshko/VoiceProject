import { React } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(props) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                {/*<Navbar.Brand href="/news">News</Navbar.Brand>*/}
                <Nav className="me-auto">
                    <NavLinks navLinks={props.navLinks} />
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
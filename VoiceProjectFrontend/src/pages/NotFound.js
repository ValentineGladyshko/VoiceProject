import { React } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound(props) {
    return (
        <section className="jumbotron text-center mt-auto">
            <Container>
                <h1 className="jumbotron-heading">{props.notFoundContent.heading}</h1>
                <p className="lead">{props.notFoundContent.text}</p>
                <Link to={props.notFoundContent.link.href} className="btn btn-lg btn-outline-light fw-bold">
                    {props.notFoundContent.link.text}
                </Link>
            </Container>
        </section>
    )
}

export default NotFound;
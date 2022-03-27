import { React, Component, useState } from 'react';
import { Container, Col, Row, Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './home.css';

function Slide(props) {
    return (
        <div>
            <img
                className="d-block w-100"
                src={props.image.src}
                alt={props.image.alt}
            />
            <Carousel.Caption>
                <h3>{props.label}</h3>
                <p>{props.text}</p>
            </Carousel.Caption>
        </div>
    );
}

function MyCarousel(props) {
    return (
        <Carousel>
            {props.slides.map((row, index) =>
                <Carousel.Item interval={5000} key={index}>
                    <Slide image={row.image} label={row.label} text={row.text} />
                </Carousel.Item>)
            }
        </Carousel>
    );
}

function HeadingBlock(props) {
    return (
        <Col lg={4} className="col">
            <img class="rounded-circle heading-image" src={props.image.src} alt={props.image.alt} />
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
            <Button variant="secondary">{props.button.text}</Button>{' '}
        </Col>
    );
}

function HeadingPanel(props) {
    return (
        <Row>
            {props.headingBlocks.map((row, index) =>
                <HeadingBlock key={index} image={row.image} button={row.button} heading={row.heading} text={row.text} />)
            }
        </Row>
    );
}

function InfoBlock(props) {
    return (
        <>
            <hr class="featurette-divider" />
            <Row className="featurette">
                <Col md={7, { order: props.order.first }}>
                    <h2 class="featurette-heading">{props.heading.primary}<span class="text-muted">{props.heading.secondary}</span></h2>
                    <p class="lead">{props.text}</p>
                </Col>
                <Col md={5, { order: props.order.second }}>
                    <img class="featurette-image img-fluid mx-auto" alt={props.image.alt} src={props.image.src} />
                </Col>
            </Row>
        </>
    );
}

function InfoPanel(props) {
    return props.infoBlocks.map((row, index) =>
        <InfoBlock key={index} image={row.image} order={row.order} heading={row.heading} text={row.text} />)
}

function Home(props) {
    return (
        <>
            <MyCarousel slides={props.slides} />
            <Container className="marketing">
                <HeadingPanel headingBlocks={props.headingBlocks} />

                <InfoPanel infoBlocks={props.infoBlocks} />

                <hr class="bottom-divider" />

            </Container>
        </>
    );
}

export default Home
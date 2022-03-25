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
const infoBlocks = [
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        heading:
        {
            primary: "First featurette heading. ",
            secondary: "It'll blow your mind."
        },
        text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
        order: {
            first: 1,
            second: 2
        }
    },
    {
        image: {
            src: "./images/image5.jpg",
            alt: "Generic placeholder image"
        },
        heading:
        {
            primary: "Oh yeah, it's that good. ",
            secondary: "See for yourself."
        },
        text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
        order: {
            first: 2,
            second: 1
        }
    },
    {
        image: {
            src: "./images/image6.jpg",
            alt: "Generic placeholder image"
        },
        heading:
        {
            primary: "And lastly, this one. ",
            secondary: "Checkmate."
        },
        text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
        order: {
            first: 1,
            second: 2
        }
    },
]

const headingBlocks = [
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        heading: "Heading",
        text: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        button: {
            text: "View details"
        }
    },
    {
        image: {
            src: "./images/image5.jpg",
            alt: "Generic placeholder image"
        },
        heading: "Heading",
        text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        button: {
            text: "View details"
        }
    },
    {
        image: {
            src: "./images/image6.jpg",
            alt: "Generic placeholder image"
        },
        heading: "Heading",
        text: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        button: {
            text: "View details"
        }
    },
]

const slides = [
    {
        image: {
            src: "./images/image.jpg",
            alt: "First slide"
        },
        label: "First slide label",
        text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        image: {
            src: "./images/image2.jpg",
            alt: "Second slide"
        },
        label: "Second slide label",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        image: {
            src: "./images/image3.jpg",
            alt: "Third slide"
        },
        label: "Third slide label",
        text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
];

const Home = () => (
    <div>
        <MyCarousel slides={slides} />
        <Container className="marketing">
            <HeadingPanel headingBlocks={headingBlocks} />

            <InfoPanel infoBlocks={infoBlocks} />

            <hr class="bottom-divider" />

        </Container>
    </div>
);

export default Home
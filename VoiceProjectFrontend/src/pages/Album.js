import { React, Component, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { Container, Col, Row, Button, ButtonGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './album.css';

<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

function Album(props) {
    return (
        <>
            <section class="jumbotron text-center">
                <Container>
                    <h1 class="jumbotron-heading">Album example</h1>
                    <p class="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    <p>
                        <Button variant="primary">Main call to action</Button>{' '}
                        <Button variant="secondary">Secondary action</Button>{' '}
                    </p>
                </Container>
            </section>
            <ThumbnailsCollection thumbnailsCollection={thumbnailsCollection}/>

        </>
    );
}

const thumbnailsCollection = [
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        image: {
            src: "./images/image4.jpg",
            alt: "Generic placeholder image"
        },
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
]

function Thumbnail(props) {
    return (
        <Col md={6} lg={4} className="myPadding">
            <Card className="mb-4 box-shadow albumCard">       
                <Card.Img variant="top" className="albumImage" src={props.image.src} alt={props.image.alt} />
                <Card.Body>
                    <Card.Text>{props.text}</Card.Text>
                    <div class="d-flex justify-content-between align-items-center">
                        <ButtonGroup size="sm">
                            <Button variant="outline-light">{props.button1.text}</Button>{' '}
                            <Button variant="outline-light">{props.button2.text}</Button>{' '}
                        </ButtonGroup>
                        <small>9 mins</small>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

function ThumbnailsCollection(props) {
    return (
        <div class="py-5">
            <Container className="myPadding">
                <Row>
                    {props.thumbnailsCollection.map((row, index) =>
                        <Thumbnail key={index} image={row.image} text={row.text} button1={row.button1} button2={row.button2} />)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Album
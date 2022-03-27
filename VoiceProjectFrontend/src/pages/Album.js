import { React, Component, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { Container, Col, Row, Button, ButtonGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './album.css';

const thumbnailsCollection = [
    {
        url: 'https://www.youtube.com/watch?v=KRvv0QdruMQ',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=lheapd7bgLA',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=xAUJYP8tnRE',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=XFqn3uy238E',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=F1Hq8eVOMHs',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=LmpuerlbJu0',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=xaQJbozY_Is',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=yiw6_JakZFc',
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        button1: {
            text: "View"
        },
        button2: {
            text: "Edit"
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=1-NxodiGPCU',
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
                <div className="player-wrapper">
                    <ReactPlayer className="react-player" url={props.url} controls="true" width="100%" height="100%" />
                </div>
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
                        <Thumbnail key={index} url={row.url} text={row.text} button1={row.button1} button2={row.button2} />)
                    }
                </Row>
            </Container>
        </div>
    );
}

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
            <ThumbnailsCollection thumbnailsCollection={thumbnailsCollection} />
            <Container>
                <hr class="m-0" />
            </Container>
        </>
    );
}

export default Album
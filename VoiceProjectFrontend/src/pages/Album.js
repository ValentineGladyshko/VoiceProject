import { React, Component, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { Container, Col, Row, Button, ButtonGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './album.css';


function Thumbnail(props) {
    return (
        <Col md={6} lg={4} className="myPadding">
            <Card className="mb-4 box-shadow albumCard">
                <div className="player-wrapper">
                    <ReactPlayer className="react-player" url={props.url} controls={true} width="100%" height="100%" />
                </div>
                <Card.Body>
                    <Card.Text>{props.text}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup size="sm">
                            <Button variant="outline-light">{props.button1.text}</Button>
                            <Button variant="outline-light">{props.button2.text}</Button>
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
        <div className="py-5">
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
            <section className="jumbotron text-center">
                <Container>
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead">Something short and leading about the collection below-its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    <p>
                        <Button variant="primary">Main call to action</Button>{' '}
                        <Button variant="secondary">Secondary action</Button>{' '}
                    </p>
                </Container>
            </section>
            <ThumbnailsCollection thumbnailsCollection={props.thumbnailsCollection} />
            <Container>
                <hr className="m-0" />
            </Container>
        </>
    );
}

export default Album
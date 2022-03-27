import { React, Component, useState } from 'react';
import { Container, Col, Row, Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './album.css';

function Album(props) {
    return (
        <>
            <section class="jumbotron text-center">
                <Container>
                    <h1 class="jumbotron-heading">Album example</h1>
                    <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    <p>
                        <Button variant="primary">Main call to action</Button>{' '}
                        <Button variant="secondary">Secondary action</Button>{' '}
                    </p>
                </Container>
            </section>
            <div class="py-5">
            </div>
        </>
    );
}

export default Album
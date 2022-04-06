import { React } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chronometer.css';

function Chronometer(props) {
    return (
        <Container>
            <Row className="text-center mt-5">
                <Col>
                    <h1 className="jumbotron-heading">{props.chronometerContent.heading}</h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <p className="lead">{props.chronometerContent.text}</p>
                </Col>
            </Row>

            <Row className="my-1 mx-1">
                <Col md={6}>
                    <Form className="my-1 mx-3">
                        <Form.Group>
                            <Form.Label>{props.chronometerContent.inputTextarea.heading}</Form.Label>
                            <Form.Control
                                as="textarea"
                                className="chronometerTextArea mb-3"
                                controlId="inputTextarea"
                                rows={14}
                                placeholder={props.chronometerContent.inputTextarea.placeholder}
                            />
                            <Row>
                                <Col lg={12} className="d-flex justify-content-end mb-2">
                                    <Button variant="secondary" className="rounded-4">
                                        {props.chronometerContent.inputTextarea.button.text}
                                    </Button>
                                </Col>
                                <Col lg={7} md={9}>
                                    {props.chronometerContent.inputTextarea.checkboxes.map((row, index) => {
                                        if (props.chronometerContent.inputTextarea.checkboxes.length === index + 1) {
                                            return (
                                                <>
                                                    <hr className="my-1" />
                                                    <Form.Check type="checkbox" id={row.id} key={row.id} >
                                                        <Form.Check.Input type="checkbox" className="myCheckbox" defaultChecked={row.isChecked} />
                                                        <Form.Check.Label>{row.label}</Form.Check.Label>
                                                    </Form.Check>
                                                </>);
                                        } else {
                                            return (
                                                <Form.Check type="checkbox" id={row.id} key={row.id} >
                                                    <Form.Check.Input type="checkbox" className="myCheckbox" defaultChecked={row.isChecked} />
                                                    <Form.Check.Label>{row.label}</Form.Check.Label>
                                                </Form.Check>);
                                        }
                                    })}
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6}>
                    <Form className="my-1 mx-3">
                        <Form.Group>
                            <Form.Label>{props.chronometerContent.outputTextarea.heading}</Form.Label>
                            <Form.Control
                                as="textarea"
                                className="chronometerTextArea mb-3"
                                controlId="outputTextarea"
                                rows={14}
                                plaintext
                                disabled />
                        </Form.Group>
                        <Row>
                            <Col lg={12} className="d-flex justify-content-center">
                                <h1>2-4 сек</h1>
                            </Col>
                            <hr className="my-1" />
                            {props.chronometerContent.outputTextarea.outputForms.map((row, index) => {
                                if (props.chronometerContent.outputTextarea.outputForms.length === index + 1) {
                                    return (
                                        <Col xl={3} lg={12} md={6} className="text-center mb-2" key={row.id}>
                                            <h4 className="my-2">3438</h4>
                                            <small className="text-muted">{row.label}</small>
                                        </Col>);
                                } else {
                                    return (
                                        <Col xl={3} lg={4} md={6} className="text-center mb-2" key={row.id}>
                                            <h4 className="my-2">3438</h4>
                                            <small className="text-muted">{row.label}</small>
                                        </Col>);
                                }
                            })}
                        </Row>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default Chronometer;
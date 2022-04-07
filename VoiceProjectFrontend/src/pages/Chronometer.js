import { React, Component } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chronometer.css';

class Chronometer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            outputText: "",
            numbersToWords: props.chronometerContent.checkboxes.numbersToWords.isChecked,
            textInBrackets: props.chronometerContent.checkboxes.textInBrackets.isChecked,
            resultInMinutes: props.chronometerContent.checkboxes.resultInMinutes.isChecked,
            time: "0 " + props.chronometerContent.timeNames.seconds,
            numberOfWords: "0",
            numberOfSymbols: "0",
            numberOfSymbolsWithoutSpaces: "0",
            numberOfPages: "0 " + props.chronometerContent.timeNames.pages
        };

        this.handleChangeInputTextarea = this.handleChangeInputTextarea.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.handleClickClearButton = this.handleClickClearButton.bind(this);
    }

    handleChangeInputTextarea(event) {
        this.setState((state) => {
            return { inputText: event.target.value }
        });

        var checkboxes = {
            numbersToWords: this.state.numbersToWords,
            textInBrackets: this.state.textInBrackets,
            resultInMinutes: this.state.resultInMinutes
        }
        this.measure(event.target.value, checkboxes);
    }

    measure(inputText, checkboxes) {
        var text = inputText;
        if (text === "") {
            this.setState(
                {
                    numberOfSymbols: 0,
                    numberOfWords: 0,
                    numberOfSymbolsWithoutSpaces: 0,
                    time: "0 " + this.props.chronometerContent.timeNames.seconds,
                    numberOfPages: "0 " + this.props.chronometerContent.timeNames.pages,
                    outputText: ""
                });
        }
        else {
            var text = text.replace(/[ ]{2,}/g, " ");
            if (checkboxes.textInBrackets) {
                text = text.replace(/ *\([^)]*\) */g, " ");
            }
            var words = text.match(/([\u0400-\u04FF]|\w)+/g);
            var textWithoutSpaces = text.replace(/[ ]*/g, "");

            var minTime = parseInt(words.length / 1.588);
            var maxTime = parseInt(words.length / 1.507);

            var time = "≈ "
            var seconds = this.props.chronometerContent.timeNames.seconds;
            var minutes = this.props.chronometerContent.timeNames.minutes;

            if (checkboxes.resultInMinutes && Math.floor(maxTime / 60)) {
                if (Math.floor(minTime / 60)) {
                    time += Math.floor(minTime / 60) + " " + minutes + " " + (minTime % 60);
                }
                else {
                    time += minTime
                }
                time += " " + seconds + " – \n" + Math.floor(maxTime / 60) + " " + minutes + " " + (maxTime % 60) + " " + seconds;
            }
            else {
                time += minTime + " " + seconds + " – " + maxTime + " " + seconds;
            }

            var pages = (textWithoutSpaces.length / 2700).toFixed(2) + " " + this.props.chronometerContent.timeNames.pages;

            this.setState(
                {
                    numberOfSymbols: text.length,
                    numberOfWords: words.length,
                    numberOfSymbolsWithoutSpaces: textWithoutSpaces.length,
                    time: time,
                    numberOfPages: pages,
                    outputText: text
                });
        }
    }

    handleChangeCheckbox(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.checked
        });
        var checkboxes = {
            numbersToWords: this.state.numbersToWords,
            textInBrackets: this.state.textInBrackets,
            resultInMinutes: this.state.resultInMinutes
        };
        checkboxes[name] = event.target.checked;
        this.measure(this.state.inputText, checkboxes);
    }

    handleClickClearButton() {
        this.setState(
            {
                inputText: "",
                outputText: ""
            });
        var checkboxes = {
            numbersToWords: this.state.numbersToWords,
            textInBrackets: this.state.textInBrackets,
            resultInMinutes: this.state.resultInMinutes
        };
        this.measure("", checkboxes);
    }

    render() {
        return (
            <Container>
                <Row className="text-center mt-5">
                    <Col>
                        <h1 className="jumbotron-heading">{this.props.chronometerContent.heading}</h1>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <p className="lead">{this.props.chronometerContent.text}</p>
                    </Col>
                </Row>

                <Row className="my-1 mx-1">
                    <Col md={6}>
                        <Form className="my-1 mx-3">
                            <Form.Group>
                                <Form.Label>{this.props.chronometerContent.inputTextarea.heading}</Form.Label>
                                <div className="textareaWrapper mb-3">
                                    <Form.Control
                                        as="textarea"
                                        className="chronometerTextarea"
                                        controlId="inputTextarea"
                                        value={this.state.inputText}
                                        rows={14}
                                        placeholder={this.props.chronometerContent.inputTextarea.placeholder}
                                        onChange={this.handleChangeInputTextarea}
                                    />
                                </div>
                                <Row>
                                    <Col lg={12} className="d-flex justify-content-end mb-2">
                                        <Button variant="secondary" className="rounded-4" onClick={this.handleClickClearButton}>
                                            {this.props.chronometerContent.inputTextarea.button.text}
                                        </Button>
                                    </Col>
                                    <Col lg={9} xl={7}>
                                        <Checkbox data={this.props.chronometerContent.checkboxes.numbersToWords} newThis={this} />
                                        <Checkbox data={this.props.chronometerContent.checkboxes.textInBrackets} newThis={this} />
                                        <hr className="my-1" />
                                        <Checkbox data={this.props.chronometerContent.checkboxes.resultInMinutes} newThis={this} />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Form className="my-1 mx-3">
                            <Form.Group>
                                <Form.Label>{this.props.chronometerContent.outputTextarea.heading}</Form.Label>
                                <div className="textareaWrapper mb-3">
                                    <Form.Control
                                        as="textarea"
                                        className="chronometerTextarea"
                                        controlId="outputTextarea"
                                        rows={14}
                                        value={this.state.outputText}
                                        disabled />
                                </div>
                            </Form.Group>
                            <Row>
                                <Col lg={12} className="text-center">
                                    <h1 className="my-h1">{this.state.time}</h1>
                                </Col>
                                <hr className="my-1" />
                                <OutputForm data={this.props.chronometerContent.outputForms.numberOfWords} size={4} value={this.state.numberOfWords} />
                                <OutputForm data={this.props.chronometerContent.outputForms.numberOfSymbols} size={4} value={this.state.numberOfSymbols} />
                                <OutputForm data={this.props.chronometerContent.outputForms.numberOfSymbolsWithoutSpaces} size={4} value={this.state.numberOfSymbolsWithoutSpaces} />
                                <OutputForm data={this.props.chronometerContent.outputForms.numberOfPages} size={12} value={this.state.numberOfPages} />
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

function Checkbox(props) {
    return (
        <Form.Check type="checkbox" >
            <Form.Check.Input type="checkbox" name={props.data.id} className="myCheckbox" checked={props.newThis.state[props.data.id]} onChange={props.newThis.handleChangeCheckbox} />
            <Form.Check.Label>{props.data.label}</Form.Check.Label>
        </Form.Check>);
}

function OutputForm(props) {
    return (
        <Col xl={3} lg={props.size} md={6} className="text-center mb-2" id={props.data.id}>
            <h4 className="my-2">{props.value}</h4>
            <small className="text-muted">{props.data.label}</small>
        </Col>);
}

export default Chronometer;
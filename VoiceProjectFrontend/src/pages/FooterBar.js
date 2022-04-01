import { React } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FooterBar(props) {
    return (
        <div className="mt-auto">
            <Container>
                <hr className="bottom-divider" />
            </Container>
            <footer className="text-muted">
                <Container>
                    <Row>
                        <Col>
                            {props.footerContent.text1}
                            <a href={props.footerContent.link1.href}>{props.footerContent.link1.text}<i className="bi bi-github ms-1"></i></a>
                            {props.footerContent.text2}
                            <a href={props.footerContent.link2.href}>{props.footerContent.link2.text}</a>
                        </Col>
                        <Col sm="auto">
                            <a href={props.footerContent.link3.href}>{props.footerContent.link3.text}
                                <i className="bi bi-arrow-up"></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default FooterBar
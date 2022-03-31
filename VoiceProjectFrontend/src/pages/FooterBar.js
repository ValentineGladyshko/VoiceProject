import { React} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FooterBar(props) {
   return (
        <footer className="text-muted">
            <Container>
                <Row>
                   <Col>
                       {props.footerContent.text1}
                       <a href={props.footerContent.link1.href}>{props.footerContent.link1.text}</a>
                       {props.footerContent.text2}
                       <a href={props.footerContent.link2.href}>{props.footerContent.link2.text}</a>
                    </Col>
                    <Col sm={2}>
                       <a href={props.footerContent.link3.href}>{props.footerContent.link3.text}</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterBar
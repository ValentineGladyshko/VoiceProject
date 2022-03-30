import { React} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FooterBar(props) {
   return (
        <footer className="text-muted">
            <Container>
                <Row>
                   <Col>
                       {props.text1} <a href={props.link1.href}>{props.link1.text}</a> {props.text2} <a href={props.link2.href}>{props.link2.text}</a>
                        {/*&copy; 2022 Valentine Gladyshko &#183; <a href="https://github.com/ValentineGladyshko">GitHub</a> &#183; <a href="#">Terms</a>*/}
                    </Col>
                    <Col sm={2}>
                       <a href={props.link3.href}>{props.link3.text}</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterBar
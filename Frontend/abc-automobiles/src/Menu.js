import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import About from './About';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
export default function Menu() {
    return (
        <div>
            <Container>
                <Row>
                    <Col >
                        <ButtonGroup size="lg" className="mb-2">
                            <Link to="/">
                                <Button>Home</Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="primary">About US</Button>
                            </Link>
                            <Link to='/'>
                                <Button>Vehicles</Button>
                            </Link>
                            <Link to='/'>
                                <Button>Services</Button>
                            </Link>
                            <Link to='/'>
                                <Button>Contact Us</Button>
                            </Link>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
            {/* <About/> */}
        </div>
    );
}
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import React from "react";

export default class About extends React.Component {
    // var [counter, setCounter] = useState(0);
    // var [name, setName] = useState('');
    // var [mobile, setMobile] = useState('');

    constructor(){
        super();
        this.state={
            'counter':0,
            'name':'',
            'mobile':''
        }
    }
    render(){
    return (
        <Container>
            <Row><h1>About Us:</h1></Row>
            <Row>
                <Col >
                    <Image src="https://empiremotorworld.com.my/wp-content/uploads/2017/10/car-banner1.jpg" />
                </Col>
                <Col>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Col>
                <Col>
                    Counter: {this.state.counter}
                    <br></br>
                    <ButtonGroup className="mb-2">
                        <Button onClick={() => { this.setState({counter:(this.state.counter)+1}) }}>+</Button>
                        <Button onClick={() => { this.setState({counter:(this.state.counter)-1}) }}>-</Button>
                    </ButtonGroup>
                </Col>
                <Col>
                    <Form onSubmit={() => { alert("name:" + this.state.name + "\n" + "mobile:" + this.state.mobile) }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={(e) => { this.setState({name:e.target.value}) }} placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="number" value={this.state.mobile} onChange={(e) => { this.setState({mobile:e.target.value}) }} placeholder="Enter your mobile number" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
}
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from './CardComponent';
function FunctionalComponent(){
return(
    <Container>
        <Row>
            <Col> <CardComponent title="Card1"></CardComponent></Col>
            <Col><CardComponent title="Card2"></CardComponent></Col>
            <Col><CardComponent title="Card3"></CardComponent></Col>
        </Row>
    </Container>
)

}
export default FunctionalComponent;
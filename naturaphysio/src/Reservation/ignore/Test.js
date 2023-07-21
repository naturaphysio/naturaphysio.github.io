import { Card, Col, Row } from 'react-bootstrap';

const Test = ({time, handleColorChange, btnColor, index}) => {
    return (
        <Card.Body onClick={handleColorChange} style={{backgroundColor: btnColor}} key={index}>

            <Row className='test' >
                <Col><p>{time}</p></Col>

            </Row>
        </Card.Body>
     );
}

export default Test;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../asset/sfondo.png';
import "./banner.css"

function ContainerImg() {
  return (
    <Container>
      <Row>
        <Col>
        <div className='position-relative'>
            <img className='img-fluid' src={banner} alt="Logo" />
            <button type="button">CONTACT US</button>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerImg;
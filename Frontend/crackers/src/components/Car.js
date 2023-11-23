import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import './Car.css';
//import ExampleCarouselImage from './components/ExampleCarouselImage';

const NoTransitionExample=()=>{
  return (
    <>
    <Carousel slide={false} style={{paddingTop:'-190px',width:'560px',height:'315px'}}>
      <Carousel.Item>
      <Container>
      <Row>
        <Col>
        <Image src="https://images.pexels.com/photos/3177239/pexels-photo-3177239.jpeg?auto=compress&cs=tinysrgb&w=600"  style={{marginLeft:'-30px',marginRight:'5px',marginTop:'-19px',marginBottom:'-19px',width:'554px',height:'315px'}}/>
        </Col>
      </Row>
    </Container>
        <Carousel.Caption>
          <h3 style={{fontFamily:'serif',color:'yellow'}}>Digital Examination</h3>
          <p style={{fontFamily:'serif',color:'lightpink'}}>Digital Examination Platform Has Designed In Such Way That Will Get User Friendly And Support.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
      <Row>
        <Col>
        <Image src="https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&w=600" style={{marginLeft:'-30px',marginRight:'5px',marginTop:'-19px',marginBottom:'-19px',width:'554px',height:'315px'}}/>
        </Col>
      </Row>
    </Container>
        <Carousel.Caption>
            <h3 style={{fontFamily:'serif',color:'yellow'}}>Thank You</h3>
            <p style={{color:'lightpink'}}>For Being Connected With Us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
      <Row>
        <Col>
          <Image src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600" style={{marginLeft:'-30px',marginRight:'5px',marginTop:'-19px',marginBottom:'-19px',width:'554px',height:'315px'}}/>
        </Col>
      </Row>
    </Container>
        <Carousel.Caption>
            <h3 style={{fontFamily:'serif',color:'yellow'}}>Hope You Have A Good Day</h3>
            <Link to='/'><p style={{fontFamily:'serif',color:'lightpink',textDecorationLine:'none'}}>Click To Enjoy The Process</p></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default NoTransitionExample;
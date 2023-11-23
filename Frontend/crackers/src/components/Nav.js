import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavScrollExample=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{color:'navy'}}>
      <Container>
      <Navbar.Brand href="/" style={{marginLeft:"30px"}}><Link to='/Car' style={{textDecorationLine:'none',color:'GrayText'}}>Digital Examination</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><Link to='/' style={{color:'lightgreen',textDecorationStyle:'dotted'}}>Home</Link></Nav.Link>
            <Nav.Link href="/"><Link to='/Login' style={{color:'lightgreen',textDecorationLine:'none'}}>Logout</Link></Nav.Link>
            <NavDropdown title="choose" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Choose Option</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                <Link to='/Login' style={{color:'lightgreen',textDecorationLine:'none'}}>Logout</Link><br/>
                <Link to='/' style={{color:'lightgreen',textDecorationLine:'none'}}>Signup</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">
             <Link to='/' style={{color:'lightgreen',textDecorationLine:'none'}}>Signup</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
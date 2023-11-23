import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Container fluid>
        <Row>
          <Col sm={3} className="sidebar-col">
            <h3>Admin Dashboard</h3>
            <Link to='/Admin'><button>Add Task</button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;

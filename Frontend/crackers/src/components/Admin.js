import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import Sidebar from './Sidebar';
// import Admin1 from './Admin1';

const initialTasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];

const Admin = () => {
  const navigate=useNavigate();
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleCloseModal = () => {
    setShowModal(false);
    setNewTask({ title: '', description: '' });
  }

  const logout=()=>{
       localStorage.removeItem('name');
       localStorage.removeItem('token');
       navigate("/Login");
  }

  const handleAddTask = () => {
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { id: Date.now(), ...newTask }]);
      handleCloseModal();
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
    <button onClick={logout}>Logout</button>
    <Container className="mt-1">
      {/* <Sidebar/> */}
      <Row>
        <Col>
          <h1 style={{ color: 'navy', borderRadius: '7px', fontFamily: 'sans-serif', textAlign: 'center' }}>
            Admin Dashboard
          </h1>
        </Col>
        <Col>
          <Link to='/Login'><Button variant="secondary">Logout</Button></Link>
       </Col> 
      </Row> 
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add Task
          </Button>
        </Col>
      </Row>
      <Col className="mt-3">
        {tasks.map((task) => (
          <Col md={4} key={task.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <Button variant="danger" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Col>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="taskTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="taskDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
};

export default Admin;

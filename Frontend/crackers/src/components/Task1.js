import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Task1.css';

const Task1 = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({
    isUserLoggedIn: false,
    TasksCreated: '',
    userStatus:'userStatus',
  });

const [taskList, setTaskList] = useState([]); 
const [slideInTasks, setSlideInTasks] = useState([]);
const handleAddTask = () => {
   
    if (tasks.TasksCreated.trim() !=='') {
      const newTask = { id: Date.now(), title: tasks.TasksCreated };
      setTaskList([...taskList, newTask]);
      setSlideInTasks([...slideInTasks, newTask.id]);
      setTasks({ ...tasks, TasksCreated: '' });
      setTimeout(() => {
        setSlideInTasks(slideInTasks.filter((taskId) => taskId !== newTask.id));
      }, 1000);
    }
  };
  const handleChange = () => {
   
    axios.post("http://localhost:5000/api/Task1", tasks)
    .then((response) => {
      console.log(response.data);
      if (tasks.userStatus === 'Add') {
        navigate('/Add'); 
      } else if (tasks.userStatus === 'Add') {
        navigate('/Add');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

  const handleGoToAdmin = () => {
    navigate('/Admin');
  };

  return (
    <div>
      <h2>Task Page</h2>
      <div className='dashboard-container'>
        <div className='dashboard-column'>
          <div className='column-content'>
            <label>Total Task</label>
            <select name="UserStatus" onChange={(e) => setTasks({ ...tasks, [e.target.name]: e.target.value })}>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <button onClick={handleChange}>Submit</button>
          </div>
        </div>
        <div className='dashboard-column'>
        <h2>Task Page</h2>
      <div className='dashboard-container'>
        <div className='dashboard-column'>
          <table>
            <thead>Total Task</thead>
            <tbody>
              <select name="UserStatus" onChange={(e) => setTasks({ ...tasks, [e.target.name]: e.target.value })}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </tbody>
            <button onClick={handleChange}>Submit</button>
          </table>
        </div>
      </div>
      <button onClick={handleGoToAdmin}>Go to Admin</button>
        </div>
        <div className='dashboard-column'>
        <h2>Task Page</h2>
      <div className='dashboard-container'>
        <div className='dashboard-column'>
          <table>
            <thead>Total Task</thead>
            <tbody>
              <select name="UserStatus" onChange={(e) => setTasks({ ...tasks, [e.target.name]: e.target.value })}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </tbody>
            <button onClick={handleChange}>Submit</button>
            <button onClick={handleAddTask}>Task</button>
          </table>
        </div>
        <div className='dashboard-column'>
          <h2>Task List</h2>
          <ul>
            {taskList.map((task) => (
              <li
                key={task.id}
                className={slideInTasks.includes(task.id) ? 'slide-in' : ''}
              >
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={handleGoToAdmin}>Go to Admin</button>
        </div>
        <div className='dashboard-column'>
        <h2>Task Page</h2>
      <div className='dashboard-container'>
        <div className='dashboard-column'>
          <table>
            <thead>Total Task</thead>
            <tbody>
              <select name="UserStatus" onChange={(e) => setTasks({ ...tasks, [e.target.name]: e.target.value })}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </tbody>
            <button onClick={handleChange}>Submit</button>
          </table>
        </div>
      </div>
      <button onClick={handleGoToAdmin}>Go to Admin</button>
        </div>
      </div>
      <button onClick={handleGoToAdmin}>Go to Admin</button>
    </div>
  );
}

export default Task1;

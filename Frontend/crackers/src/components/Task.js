import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Task.css';

const Task = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({
    isUserLoggedIn: false,
    TasksCreated: '',
    UserStatus: '',
  });

  const handleChange = () => {
    // Perform some task when the button is clicked, for example, making a POST request.
    axios
      .post("http://localhost:5000/api/Task", tasks) // Change the URL to your backend endpoint
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        // Redirect to Admin page if necessary
        navigate('/Task');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleGoToAdmin = () => {
    navigate('/admin');
  };

  return (
    <div>
      <h2>Task Page</h2>
      <div className='dashboard-container'>
        <div className='dashboard-column'>
          <table>
            <thead>Total Task</thead>
            <tbody>
              <select name="UserStatus" onChange={e => setTasks({ ...tasks, [e.target.name]: e.target.value })}>
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
  );
}

export default Task;

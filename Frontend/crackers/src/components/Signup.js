import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const formFields = {
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState(formFields);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    navigate('/Login');
    window.history.replaceState(null,"","/Login");
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/Signup', formData);
      if (response.data.message === 'Signup successful') {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        navigate('/Login');
        console.log('Signup successful', response.data.token);
      } else {
        throw new Error('Signup failed');
      }
      setFormData({
        email: '',
        password: ''
      });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('Email is already in use');
      } else {
        setError('Signup failed. Please try again.');
      }
      console.error('Could not register', error);
    }
  };

  return (
    <div className="form-container">
      <h3 style={{ color: 'greenyellow', fontFamily: 'sans-serif' }}>Signup</h3>
      <form className="signup-form" onSubmit={handlesubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={formData.email} onChange={handleChange} name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={formData.password} onChange={handleChange} name="password" placeholder="Password" required />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Submit</button>
        <button onClick={logout}>Logout</button>
      </form>
    </div>
  );
};

export default Signup;

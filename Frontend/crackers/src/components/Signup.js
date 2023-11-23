import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Car from './Car';
import Car1 from './Car1';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    gender: 'male',
  });

  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData({ ...formData, [name]:value })
  };

  const handleSubmit =async (e) => {
               e.preventDefault();
          try{
               const response=await axios.post("http://localhost:5000/api/Signup",formData);
               localStorage.setItem("name",formData.name);
               console.log("signup successful",response.data.token);
               navigate("/Login");
               if(!response.data){
                          throw new Error("signup failed");
               }
               setFormData({
                 name:"",
                 email:"",
                 password:"",
                 address:"",
                 gender:"",
               });
              }catch(error){
                         console.error("could not register",error);    
       }
     
    }

  return (
    <>
      <Nav style={{ marginTop: '-200px', marginBottom: '30px', backgroundColor: 'green' }} />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 style={{ color: 'greenyellow', marginTop: '-172px', fontFamily: 'sans-serif' }}>Signup</h2>
          

          <div className="form-group">
            <label style={{ color: 'greenyellow', marginTop: '-14px', fontFamily: 'sans-serif' }}>Name:</label>
            <input
              type="text"
              style={{ backgroundColor: 'black', color: 'greenyellow', paddingRight: '190px', fontFamily: 'sans-serif' }}
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label style={{ color: 'greenyellow', marginTop: '-14px', fontFamily: 'sans-serif' }}>Email:</label>
            <input
              type="email"
              style={{ backgroundColor: 'black', color: 'greenyellow', fontFamily: 'sans-serif' }}
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label style={{ color: 'greenyellow', marginTop: '-14px', fontFamily: 'sans-serif' }}>Password:</label>
            <input
              type="password"
              style={{ backgroundColor: 'black', color: 'greenyellow', fontFamily: 'sans-serif' }}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label style={{ color: 'greenyellow', marginTop: '-14px', fontFamily: 'sans-serif' }}>Address:</label>
            <textarea
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{ backgroundColor: 'black', color: 'greenyellow', fontFamily: 'sans-serif' }}
            ></textarea>
          </div>
          <div className="form-group">
            <label style={{ color: 'greenyellow', marginTop: '-20px', fontFamily: 'sans-serif' }}>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{ marginTop: '-5px', backgroundColor: 'black', color: 'greenyellow', fontFamily: 'sans-serif' }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            style={{ color: 'greenyellow', marginTop: '-20px', backgroundColor: 'darkgreen', fontFamily: 'sans-serif' }}
          >
            Signup
          </button>
        </form>
        <div className="form-group-1">
          <Car />
        </div>
      </div>
      <Car1 />
    </>
  );
};

export default Signup;

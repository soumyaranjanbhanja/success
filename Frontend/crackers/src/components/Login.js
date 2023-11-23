import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
              const response=await axios.post("http://localhost:5000/api/Login",{
                    name:formData.name,
                    password:formData.password,
               });
               if(response.data.token){
                              localStorage.setItem("token",response.data.token);
                              axios.defaults.headers.common['Authorization']=`Bearer${response.data.token}`
                              navigate("/Admin");
                              console.log("token",response.data.token);
               }else{
                throw new Error("login failed");
               }
               setFormData({
                   name:'',
                   password:'',
               });
    }catch(error){
        console.error("could not login",error);    
    } 
  }      
  
  return (
    <>
    <Nav/>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{fontFamily:'sans-serif',color:'greenyellow'}}>Login</h2>
        
        <div className="form-group">
          <label htmlFor="name" style={{color:'greenyellow',fontFamily:'sans-serif'}}>Name:</label>
          <input
            type="text"
            id="name" style={{color:'greenyellow',backgroundColor:'black'}}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{color:'greenyellow',fontFamily:'sans-serif'}}>Password:</label>
          <input
            type="password"
            id="password" style={{color:'greenyellow',backgroundColor:'black'}}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;

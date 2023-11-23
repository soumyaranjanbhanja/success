import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import Task1 from './components/Task1';
import Add from './components/Add';
import Adda from './components/Adda';
import Nav from './components/Nav';
import Car from './components/Car';
import Car1 from './components/Car1';
//import Main from './components/Main';



const App = () => {
  return (
   <BrowserRouter>
      <Routes>
      <Route path='/'      element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Task1' element={<Task1/>}/>
      <Route path='/Add'   element={<Add/>}/>
      <Route path='/Adda'  element={<Adda/>}/>
      <Route path='/Nav'   element={<Nav/>}/>
      <Route path='/Car'   element={<Car/>}/>
      <Route path='/Car1'  element={<Car1/>}/>
      {/*<Route path='/Main' element={<Main/>}/>*/}
    </Routes>
    </BrowserRouter>
  );
};

export default App;

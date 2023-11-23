import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<Signup/>}/>
     </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App

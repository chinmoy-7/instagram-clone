import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup/signup';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup/signup';
import {AuthContextprovider} from './context/AuthContext';
import Post from './components/Post/post';
import Protected from './context/Protected';
function App() {
  return (
    <>
      <BrowserRouter>
      <AuthContextprovider>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/post" element={<Protected><Post/></Protected>}/>
      </Routes>
      </AuthContextprovider>
      </BrowserRouter>
    </>
  );
}

export default App;

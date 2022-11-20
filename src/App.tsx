import './App.css';
import {  BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Home from './components/screens/home/Home';
import Login from './components/screens/login/Login';
import Signup from './components/screens/login/SignUp';


function App() {
  return (
   <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  </BrowserRouter>
   </div> 
  );
}

export default App;

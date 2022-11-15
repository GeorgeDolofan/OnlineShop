import './App.css';
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/screens/home/Home';
import Login from './components/screens/login/Login';


function App() {
  return (
   <div>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  </BrowserRouter>
   </div> 
  );
}

export default App;

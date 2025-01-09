import logo from './logo.svg';
import './App.css';
import Chaticon from './Chaticon';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Home from './Home';
import Nscreen from "./Nscreen"
import Max from "./Max";

function App() {
  // const navigate = useNavigate()
  // const handleBackFormMax=()=>{
  //   Navigate("./")
  // }
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<div className="app-1"> <Home /></div>
        }
        />
        <Route path='/' element={<Chaticon />} />
        <Route path='/max' element={<div className="app-2"> <Max /></div>
        } />
      </Routes>
    </div>
  );
}

export default App;

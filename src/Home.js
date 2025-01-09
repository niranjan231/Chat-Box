import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Normal from "./Normal"
import Leftvar from "./Leftvar";






const Home = () => {
    const navigate = useNavigate()
    const handleBack=()=>{
        navigate("/")
    }
    return (
        <div>
          <Normal handleBack ={handleBack}/>
          <Leftvar handleBack ={handleBack}/>
        </div>
    )
}
export default Home;
import "./App.css";
import { FaMinus } from "react-icons/fa6";
import { FiMinimize2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";







const Normal=({handleBack})=>{
  
  const navigate = useNavigate()
  const handleMixPage = () =>{
    navigate("/max")
  }
    return (
        <div className="nor-1">
          <h5>Chat Assistant</h5>
          <div className="nor-2">
          <span ><FaMinus /></span>
          <span onClick={handleMixPage} ><FiMinimize2 /></span>
          <span onClick={handleBack}><RxCross2 /></span>
          </div>
        </div>
    )
}
export default Normal;
import "./App.css";
import { FaMinus } from "react-icons/fa6";
import { RiStopMiniLine } from "react-icons/ri";
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
          <span onClick={handleMixPage}><FaMinus /></span>
          <span ><RiStopMiniLine /></span>
          <span onClick={handleBack}><RxCross2 /></span>
          </div>
        </div>
    )
}
export default Normal;
import "./App.css";
import { IoChatbox } from "react-icons/io5";
import { useNavigate } from "react-router-dom";





const Chaticon=()=>{
    const  navigate = useNavigate()
const handleHone=()=>{
    navigate("/home")
}

    return (
        <div className="icon-1">
            <span onClick={handleHone}><IoChatbox /></span>
        </div>
    )
}
export default Chaticon;
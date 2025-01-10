import "../App.css";
import { IoChatbox } from "react-icons/io5";
import { useNavigate } from "react-router-dom";





const Chaticon=()=>{
    const  navigate = useNavigate()
const handleHone=()=>{
    navigate("/home")
}




const handleLogoutformChatBox = () => {
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('userData'); 
    alert('Logged out successfully!');
    navigate('/');
  };

    return (
        <div className="icon-10">
            <button onClick={handleLogoutformChatBox} style={{width:"120px",height:"40px", backgroundColor:"red", color:"white", border:"none", borderRadius:"10px" }}>Logout</button>
        <div className="icon-1">
            <span onClick={handleHone}><IoChatbox /></span>
        </div>
        </div>
    )
}
export default Chaticon;
import "./App.css";
import { FaMinus } from "react-icons/fa6";
import { RiStopMiniLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaMessage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Leftvar from "./Leftvar";
import Rightvar from "./Rightvar";



const Max = () => {
    const navigate = useNavigate()
    const handleBackFormMax = () => {
        navigate("/")
    }
    const [activeScreen, setActiveScreen] = useState("Nscreen");

    const showNscreen = () => {
        setActiveScreen("Nscreen");
    };

    const toggleSettings = () => {
        setActiveScreen(activeScreen === "Settings" ? "Nscreen" : "Settings");
    };
    const handleHomeSize = () => {
        navigate("/home")
    }

    return (
        <div>
            <div className="max-1">
                <h5>Chat Assistant</h5>
                <div className="max-2">
                    <span onClick={handleHomeSize}><FaMinus /></span>
                    <span><RiStopMiniLine /></span>
                    <span onClick={handleBackFormMax} ><RxCross2 /></span>
                </div>
            </div>
            <Rightvar />
        </div>
    );
};

export default Max;

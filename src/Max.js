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



const Max = () => {
    const navigate = useNavigate()
    const handleBackFormMax = () =>{
        navigate("/")
    }
    const [activeScreen, setActiveScreen] = useState("Nscreen");

    const showNscreen = () => {
        setActiveScreen("Nscreen");
    };

    const toggleSettings = () => {
        setActiveScreen(activeScreen === "Settings" ? "Nscreen" : "Settings");
    };

    return (
        <div>
            <div className="max-1">
                <h5>Chat Assistant</h5>
                <div className="max-2">
                    <span onClick={handleBackFormMax}><FaMinus /></span>
                    <span><RiStopMiniLine /></span>
                    <span><RxCross2 /></span>
                </div>
            </div>

            <div className="max-5">
                <div className="max-3">
                    <div className="max-4">
                        <span style={{ cursor: "pointer" }} onClick={showNscreen}><FaMessage /></span>
                        <span onClick={toggleSettings} style={{ cursor: "pointer" }}><IoSettingsSharp /></span>
                        <span><RiLoginCircleFill /></span>
                    </div>
                </div>

                {/* Conditional Rendering for Settings Screen */}
                {activeScreen === "Settings" && (
                    <div className="account-info">
                        <div className="max-10">
                            <div className="max-11">
                                <span><FaUser /></span><h6>Account</h6>
                                </div>
                                <span style={{ marginRight: "10px" }}><FaChevronCircleRight /></span>
                        </div>
                        <div className="max-10">
                            <div className="max-11">
                                <span><FaLocationDot /></span><h6>Notification</h6>
                                </div>
                                <span style={{ marginRight: "10px" }}><FaChevronCircleRight /></span>
                        </div>
                        <div className="max-10">
                            <div className="max-11">
                                <span><IoIosNotifications /></span><h6>Location</h6>
                                </div>
                                <span style={{ marginRight: "10px" }}><FaChevronCircleRight /></span>
                        </div>


                        {/* <h6>Account Information</h6>
                    <p>Welcome to your account settings. Here you can manage your preferences.</p> */}
                        {/* Add more account-related settings or options here */}
                    </div>
                )}
            </div>
             <span onClick={handleBackFormMax}
                            
                            style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "50%",
                                fontSize: "20px",
                                textAlign: "center",
                                marginLeft: "800px",
                                marginTop: "20px",
                                cursor: "pointer",
                            }}
                            className="left-7"
                        >
                            <RxCross1 />
                        </span>
        </div>
    );
};

export default Max;

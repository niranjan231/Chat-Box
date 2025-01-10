import "./App.css";
import { FaMessage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Nscreen from "./Nscreen";
import { FaUser } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";

const Leftvar = ({ handleBack }) => {
    const navigate = useNavigate();
    const [activeScreen, setActiveScreen] = useState("Nscreen");
    const [location, setLocation] = useState(null);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showNotificationMenu, setShowNotificationMenu] = useState(false);
    const [showHelpSection, setShowHelpSection] = useState(false);
    const [showSettings, setShowSettings] = useState(false); 
    const [fetchingLocation, setFetchingLocation] = useState(false); 

    const showNscreen = () => {
        setActiveScreen("Nscreen");
        setShowSettings(false);
        setShowHelpSection(false);
    };

    const toggleSettings = () => {
        if (showSettings) {
            setShowSettings(false); 
        } else {
            setShowSettings(true);
            setShowHelpSection(false); 
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            setFetchingLocation(true); 
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    setFetchingLocation(false);
                },
                (error) => {
                    console.error("Error fetching location: ", error.message);
                    alert("Unable to fetch location. Please check your permissions.");
                    setFetchingLocation(false); 
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    const handleAccountClick = () => {
        setShowAccountMenu(!showAccountMenu);
    };

    const handleNotificationClick = () => {
        setShowNotificationMenu(!showNotificationMenu);
    };

    const handleHelpClick = () => {
        if (showHelpSection) {
            setShowHelpSection(false);
        } else {
            setShowHelpSection(true); 
            setShowSettings(false); 
        }
    };

    return (
        <div className="leftvar">
            <div className="left">
                <div className="left-1">
                    <div className="left-2">
                        <span onClick={showNscreen} style={{ cursor: "pointer" }}><FaMessage /></span>
                        <span onClick={toggleSettings} style={{ cursor: "pointer" }}><IoSettingsSharp /></span>
                        <span onClick={handleHelpClick} style={{ cursor: "pointer" }}><IoIosHelpCircle /></span>
                    </div>
                </div>

                {showSettings ? (
                    <div className="settings">
                        <h2>Settings</h2>
                        <div
                            className="left-10"
                            onClick={handleAccountClick}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="left-11">
                                <span><FaUser /></span><h6>Account</h6>
                            </div>
                            <span style={{ marginRight: "10px" }}><FaChevronCircleRight /></span>
                        </div>
                        {showAccountMenu && (
                            <p style={{ marginLeft: "20px", marginTop: "10px" }}>
                                Account menu
                            </p>
                        )}
                        <div className="left-10" onClick={handleNotificationClick} style={{ cursor: "pointer" }}>
                            <div className="left-11">
                                <span><IoMdNotifications /></span><h6>Notification</h6>
                            </div>
                            <span style={{ marginRight: "10px" }}><FaChevronCircleRight /></span>
                        </div>
                        {showNotificationMenu && (
                            <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                                <p>Notification menu</p>
                            </div>
                        )}
                        <div className="left-10" onClick={handleLocationClick} style={{ cursor: "pointer" }}>
                            <div className="left-11">
                                <span><FaLocationDot /></span><h6>Location</h6>
                            </div>
                            <span
                                style={{
                                    marginRight: "10px",
                                    width: "50px",
                                    height: "30px",
                                    backgroundColor: fetchingLocation ? "green" : "gray", // Change color based on fetchingLocation
                                    borderRadius: "30%",
                                    border: "2px solid black" 
                                }}
                            ></span>
                        </div>
                        {location && (
                            <div className="map-container" style={{ marginTop: "20px" }}>
                                <iframe
                                    title="User Location"
                                    width="100%"
                                    height="300px"
                                    style={{ border: "0" }}
                                    src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                ) : null}

                {showHelpSection && (
                    <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                        <h4>Question 10 here</h4>
                        <h4>Question 2 here</h4>
                        <h4>Question 3 here</h4>
                        <h4>Question 4 here</h4>
                        <h4>Question 5 here</h4>
                    </div>
                )}

                {activeScreen === "Nscreen" && !showSettings && !showHelpSection && <Nscreen />}
            </div>

            <span
                onClick={handleBack}
                style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "20px",
                    textAlign: "center",
                    marginLeft: "400px",
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

export default Leftvar;

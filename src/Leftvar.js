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

const Leftvar = ({handleBack}) => {
    const navigate = useNavigate();
    const [activeScreen, setActiveScreen] = useState("Nscreen"); // 'Nscreen' or 'Settings'
    const [location, setLocation] = useState(null); // To store user location
    const [showAccountMenu, setShowAccountMenu] = useState(false); // To toggle account menu text

    // const handleBack = () => {
    //     navigate("/");
    // };

    const showNscreen = () => {
        setActiveScreen("Nscreen");
    };

    const toggleSettings = () => {
        setActiveScreen(activeScreen === "Settings" ? "Nscreen" : "Settings");
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude }); // Save location to state
                },
                (error) => {
                    console.error("Error fetching location: ", error.message);
                    alert("Unable to fetch location. Please check your permissions.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    const handleAccountClick = () => {
        setShowAccountMenu(!showAccountMenu); // Toggle the account menu text
    };

    return (
        <div className="leftvar">
            <div className="left">
                <div className="left-1">
                    <div className="left-2">
                        <span onClick={showNscreen} style={{ cursor: "pointer" }}><FaMessage /></span>
                        <span onClick={toggleSettings} style={{ cursor: "pointer" }}><IoSettingsSharp /></span>
                        <span><RiLoginCircleFill /></span>
                    </div>
                </div>

                {activeScreen === "Settings" ? (
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
                        <div className="left-10">
                            <div className="left-11">
                                <span><IoMdNotifications /></span><h6>Notification</h6>
                            </div>
                            <span style={{ marginRight: "10px" }}><FaChevronCircleRight /></span>
                        </div>
                        <div className="left-10" onClick={handleLocationClick} style={{ cursor: "pointer" }}>
                            <div className="left-11">
                                <span><FaLocationDot /></span><h6>Location</h6>
                            </div>
                            <span style={{ marginRight: "10px" }}><FaChevronCircleRight /></span>
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
                ) : (
                    <Nscreen />
                )}
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

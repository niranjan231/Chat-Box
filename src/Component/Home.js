import React, { useEffect, useState } from "react";
import "../App.css"
import Normal from "../Pages/Normal";
import Leftvar from "./Leftvar";
import { useNavigate } from "react-router-dom";
// import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    };

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);
    const [isDragging, setIsDragging] = useState(false); // Track if mouse is being held down

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const newPosition = { x: event.clientX - 50, y: event.clientY - 50 }; // Center the component on the cursor
            setPosition(newPosition);

            const newTrail = [...trail, { x: event.clientX, y: event.clientY }];
            if (newTrail.length > 10) newTrail.shift(); // Limit the number of dots
            setTrail(newTrail);
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging, trail]);

    return (
        <div>
            <div
                className="home-1"
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,
                    transition: 'left 0.1s ease, top 0.1s ease', // Add transition for smooth movement
                    zIndex: 1, // Make sure it's above the trail
                }}
            >
                <Normal handleBack={handleBack} />
                <Leftvar handleBack={handleBack} />
            </div>
            <div className="cursor-trail" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}>
                {trail.map((dot, index) => (
                    <div key={index} className="dot" style={{ left: dot.x, top: dot.y }} />
                ))}
            </div>
        </div>
    );
};

export default Home;

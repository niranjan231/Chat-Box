import "../App.css";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Nscreen = () => {
    const [inputText, setInputText] = useState("");
    const [texts, setTexts] = useState([]);

    const handleInputChange = (e) => {
        setInputText(e.target.value); 
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputText.trim() !== "") { 
            setTexts([...texts, inputText]);
            setInputText(""); 
        }
    };

    return (
        <div>
            <div className="left-3">
                <div className="left-6">
                    <div className="left-5">
                        <span><FaUser /></span><p>Hi</p>
                    </div>
                    <br></br>
                    <div className="left-5">
                        <span><FaUser /></span><p>How are You...</p>
                    </div>
                </div>

                <div className="left-8">
                    {texts.map((text, index) => (
                        <p key={index} className="left-9">{text}</p> 
                    ))}
                </div>

                <input
                    className="left-input"
                    type="text"
                    placeholder="Type Something here..."
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </div>
    );
};
export default Nscreen;

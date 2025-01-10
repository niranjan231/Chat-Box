import "../App.css";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Mscreen = () => {
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
            <div className="right-3">
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
                        <p key={index} className="right-15">{text}</p> 
                    ))}
                </div>

                <input
                    className="right-4"
                    type="text"
                    placeholder="Type Something heretyui"
                    value={inputText} 
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyPress} 
                />
            </div>
        </div>
    );
};

export default Mscreen;

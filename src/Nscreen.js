import "./App.css";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Nscreen = () => {
    const [inputText, setInputText] = useState(""); // Temporary input value
    const [texts, setTexts] = useState([]); // Array to store all entered texts

    const handleInputChange = (e) => {
        setInputText(e.target.value); // Update the temporary input value
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputText.trim() !== "") { // Check if Enter is pressed and input is not empty
            setTexts([...texts, inputText]); // Add the current input to the texts array
            setInputText(""); // Clear the input field
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
                        <p key={index} className="left-9">{text}</p> // Render each text in its own <p> tag
                    ))}
                </div>

                <input
                    className="left4"
                    type="text"
                    placeholder="Type Something here..."
                    value={inputText} // Bind the input value to state
                    onChange={handleInputChange} // Update the state on input change
                    onKeyDown={handleKeyPress} // Listen for the Enter key press
                />
            </div>
        </div>
    );
};

export default Nscreen;

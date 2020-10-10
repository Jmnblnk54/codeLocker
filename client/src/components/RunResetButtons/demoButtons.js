import React from "react";
import "./styles.css";

function DemoButtons({ onSave, onExecute, onReset }) {
    function savePopUp() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    return (
        <div className="buttonWrapper flex flex-row flex-wrap overflow-hidden justify-center">
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md"
                    onClick={onExecute}
                >
                    Run!
                </button>
            </div>
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md"
                    onClick={onReset}
                >
                    Reset!
                </button>
            </div>
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md"
                    onClick={savePopUp}
                >
                    Save!
                </button>
            </div>
            <div className="popup">
                <span className="popuptext" id="myPopup">
                    Sign-Up To Save!
                </span>
            </div>
        </div>
    );
}

export default DemoButtons;

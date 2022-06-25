import React from "react";
import "../../assets/css/Alert.css";

const Alert = ({ message, onClose }) => {
    return (
        <div className="alert__background">
            <div className="alert__box" role="alert">
                <div className="alert__header">
                    <h2 className="alert__title">Alert</h2>
                    <button
                        className="alert__close"
                        onClick={() => {
                            onClose();
                        }}
                    >
                        &times;
                    </button>
                </div>
                <div className="alert__body">
                    {message || "Something went wrong"}
                </div>
            </div>
        </div>
    );
};

export default Alert;

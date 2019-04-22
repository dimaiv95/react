import React from "react";

import "./error-indicator.css";
import errorIndicator from "./error-indicator.png";

const ErrorIndicator = () => {

    return (
        <div className="error-indicator">
            <img src={errorIndicator} alt="Error" />
            <h2 className="error-indicator__title">Error!</h2>
            <p className="error-indicator__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam asperiores deleniti doloribus tempora quasi?</p>
        </div>
    );

};

export default ErrorIndicator;
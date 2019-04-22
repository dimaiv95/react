import React from "react";

import "./error-indicator.scss";
import errorIndicator from "./error-indicator.png";

 const ErrorIndicator = ({ message }) => {
    return(
        <div className="error-indicator">
            <div className="row justify-content-center">
                <div className="col text-center">
                    <div className="alert alert-danger mb-0 pt-4 pb-4">
                        <img src={ errorIndicator } className="error-indicator__img" alt="Error indicator" />
                        <h2 className="error-indicator__title alert-heading">Error</h2>
                        <p className="error-indicator__text">{ message }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ErrorIndicator.defaultProps = {
    message: "Reload the page"
};

export default ErrorIndicator;
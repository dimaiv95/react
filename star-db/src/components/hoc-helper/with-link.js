import React from "react";

const withLink = (name) => (Component) => {
    
    return (props) => {
        console.log(name, props);
        return(
            <Component {...props} className={name} />
        );
    }

};

export default withLink;
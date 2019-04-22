import React from "react";

import "./app-header.css";

const AppHeader = ( { toDo, done } ) => {
    return (
        <div className="d-flex app-head justify-content-between ">
            <h1 className="app-head__title">My Todo List</h1>
            <div className="app-head__info align-self-end"><span>{toDo}</span> more to do, <span>{done}</span> done</div>
        </div>
    );
};

export default AppHeader;
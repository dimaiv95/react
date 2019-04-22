import React from "react";
import { Link, NavLink  } from "react-router-dom";

import "./header.css";


const Header = () => {

    return (
        <header className="header ">
            <div className="row align-items-center">
                <h1 className="header__title col-4">
                    <Link to="/" className="test" >Star DB</Link>
                </h1>
                <div className="header__nav col">
                    <NavLink  to="/people/" className="header__nav-link" activeClassName="active">People</NavLink >                
                    <NavLink  to="/planets/" className="header__nav-link" activeClassName="active">Planets</NavLink >
                    <NavLink  to="/starships/" className="header__nav-link" activeClassName="active" >Starships</NavLink >
                </div>
            </div>
        </header>
    );

};

export default Header;
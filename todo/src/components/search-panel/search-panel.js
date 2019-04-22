import React, { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component{

    constructor(){
        super();

        this.state = {
            term: ""
        }

    }

    onSeachChange = (e) => {
        
        const term = e.target.value;

        this.setState({ term });

        //console.log(e.target.value);

        this.props.onSearchChange(e.target.value);

        //console.log(e.target.value);
    };

    render() {
        return <input className="form-control search-panel" placeholder="Search" onChange={ this.onSeachChange } value={ this.state.term } />;
    }

    
}

export default SearchPanel;
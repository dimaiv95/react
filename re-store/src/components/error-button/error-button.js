import React, { Component } from "react";

export default class ErrorButton extends Component {

    constructor(){
        super();

        this.state = {
            renderError: false
        }
    }

    onClick = () => {
        this.setState({
            renderError: true
        });
    };

    render(){

        if(this.state.renderError){
            this.foo.bar = 0;
        }

        return(
            <button
                className="btn btn-danger"
                onClick={this.onClick} >Throw Error</button>
        );
    }
}
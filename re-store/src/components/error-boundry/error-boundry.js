import React, { Component } from "react";

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component{

    constructor(){
        super();

        this.state = {
            isError: false
        }
    }

    componentDidCatch(){
        this.setState({
            isError: true
        });
    }

    render(){
        if(this.state.isError){
            return <ErrorIndicator />;
        }
        return this.props.children;
    }
};
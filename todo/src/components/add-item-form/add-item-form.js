import React, { Component } from "react";

import "./add-item-form.css";

class AddItemForm extends Component {
    
    constructor(){
        super();

        this.state = {
            label: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ""
        });
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
        console.log(e.target.value);
    };

    render(){

        return (
            <form className="d-flex add-item-form" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" placeholder="Add item" onChange={ this.onLabelChange } value={ this.state.label }/>
                <button type="submit" className="btn btn-info btn-add" >Добавить</button>
            </form>
           
        );
    }

}

export default AddItemForm;
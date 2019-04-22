import React, { Component } from "react";

import "./todo-list-item.css";

class TodoListItem extends Component{

    render() {

        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classNames = "d-flex todo-list-item";

        if(done){
            classNames += " done";
        }
        if(important){
            classNames += " important";
        }

        return (
            <span className={classNames} >
                <p onClick={ onToggleDone }>{ label }</p>
                <span className="btn-icon" onClick={ onToggleImportant }><i className="fa fa-exclamation"></i></span>
                <span className="btn-icon" onClick={ onDeleted }><i className="fa fa-trash-o"></i></span>
            </span>
        );
    }

}

export default TodoListItem;
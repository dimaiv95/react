import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

import './app.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            todoData: [
                this.createTodoItem("Drinck Coffe"),
                this.createTodoItem("Learn React"),
                this.createTodoItem("Build Awesome App")
            ],
            term: "",
            filter: "all"
        };
    }
    
    deleteItem = (id) => {
        this.setState(( { todoData } ) => {
            const idx = todoData.findIndex((el) => el.id === id);
            
            const newArray =[
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            
            return {
                todoData: newArray
            };

        });
    };

    addItem = (label) => {
        this.setState(( {todoData} ) => {
            const newArray = [
                ...todoData,
                this.createTodoItem(label)
            ];

            return {
                todoData: newArray
            }
        });
    }; 

    searchItem(items, term){

        if(term.length === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter){
        switch(filter){
            case "all":
                return items;
            case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done); 
            default: 
                return items;
        }
    }

    onSearchChange = (term) => {
        this.setState({
            term
        });
    };

    onFilterChange = (filter) => {
        this.setState({
            filter
        });
    }

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    toggleImportant = (id) => {
        this.setState(( { todoData } ) => {
            return {
                todoData: this.toggleProperty(todoData, id, "important")
            };
        });
    };

    toggleDone = (id) => {
        this.setState(( { todoData } ) => {
            return {
                todoData:  this.toggleProperty(todoData, id, "done")
            };
        });
    };


    maxid = 0;

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxid++
        };
     };

   
    render() {

        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(this.searchItem(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="d-flex justify-content-between filter-panel">
                    <SearchPanel onSearchChange={ this.onSearchChange } />
                    <ItemStatusFilter filter={ filter } onFilterChange={this.onFilterChange} />
                </div>
                
                <TodoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.toggleImportant }
                    onToggleDone={ this.toggleDone }
                />
                <AddItemForm onAddItem={ this.addItem } />
            </div>
        );
    }
}

export default App;
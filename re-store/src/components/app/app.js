import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./app.scss";

import { HomePage, CardPage } from "../pages";
import BookItem from "../book-item";
import ShopHeader from "../shop-header";

class App extends Component {

    render(){
        return(
            <div className="app">
                <ShopHeader numItem={5} total={210} />
               
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/cart" component={CardPage} />
                    <Route path="/article/:id" component={BookItem} />
                </Switch>
            </div>
        );
    }
}

export default App;
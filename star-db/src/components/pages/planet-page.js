import React, { Component } from "react";

import { PlanetList, PlanetDetails } from "../sw-components"

import Row from "../row";

class PlanetPage extends Component{

    constructor(){
        super();

        this.state = {
            selectedItem: null
        };
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render(){
        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} ></PlanetList>}
                right={<PlanetDetails itemId={this.state.selectedItem} />}
            />
        );
    }

}

export default PlanetPage;
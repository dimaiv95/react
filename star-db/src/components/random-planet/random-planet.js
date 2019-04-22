import React, { Component } from "react";
import { PropTypes } from 'prop-types';

import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";

import { withSwapiService } from "../hoc-helper";

import "./random-planet.css";


class RandomPlanet extends Component{

    static defaultProps = {
        updateInterval: 3000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    }

    constructor(){
        super();

        this.state = {
           planet: {},
           loading: true,
           error: false
        };
    }

    componentDidMount(){
        this.updatePlanet();

        this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
        
    }


    componentWillUnmount(){
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
         });
        
    }

    onError = (err) => {
        this.setState({ 
            error: true,
            loading: false
        });
    }

    updatePlanet = () => { 
        const id = this.random(2, 19);

        const { getData } = this.props;
        
        getData(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    random(min, max){
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    render(){

        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;

        const spiner = loading ? <Spiner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet">
                <div className="row">
                    { errorMessage }
                    { spiner }
                    { content }
                </div>
            </div>
        );
    }
    

}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
                
                <div className="col-sm-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="random-planet__img" alt={name} />
                </div>
                <div className="col">
                    <h2 className="random-planet__title">{ name }</h2>
                    <ul className="random-planet__list list-group list-group-flush">
                        <li className="random-planet__item list-group-item">
                            <span>Population:</span>
                            <span>{ population }</span>
                        </li>
                        <li className="random-planet__item list-group-item">
                            <span>Rotation Period:</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="random-planet__item list-group-item">
                            <span>Diameter:</span>
                            <span>{ diameter }</span>
                        </li>
                    </ul>
                </div>

        </React.Fragment>
    );
};


const mapMethodsToProps = function(swapiService){
    return {
        getData: swapiService.getPlanet
    }
};

export default withSwapiService(mapMethodsToProps)(RandomPlanet);
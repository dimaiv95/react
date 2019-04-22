import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";
import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import { StarshipDetails } from "../sw-components";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

class App extends Component{

    swapiService = new SwapiService();

    render(){
        return (
            <div className="stardb">
                <ErrorBoundry>
                    <SwapiServiceProvider value={this.swapiService} >
                        <Router>
                            <Header />
                            <RandomPlanet />
                            <ErrorButton />
                            
                            <Route  path="/"
                                    render={() => <h2>Welcome to Star DB</h2> }
                                    exact />

                            <Route  path="/people/:id?" component={PeoplePage} />

                            <Route  path="/planets/" component={PlanetPage} />

                            <Route  path="/starships/"
                                    component={StarshipPage}
                                    exact />

                            <Route  path="/starships/:id" 
                                    render={({match}) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    } } />

                        </Router>
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
        );
    }
};

export default App;
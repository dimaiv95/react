import React, {Component} from "react";

import Spiner from "../spiner";

import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {

        constructor(){
            super();
    
            this.state = {
                data: null,
                loading: true,
                error: false
            };
    
        }
    
        componentDidMount(){

            this.setState({
                loading: true,
                error: false
            });

            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
                .catch(() => {
                    this.setState({
                        loading: false,
                        error: true
                    });
                });
        }

        render(){
          
            const { data, loading, error } = this.state;

            if(loading){
                return (
                    <div className="list">
                        <Spiner />
                    </div>
                );
            }
            if(error){
                return (
                    <div className="list">
                        <ErrorIndicator />
                    </div>
                );
            }

            return (
                <div className="list">
                    <View {...this.props} data={data} />
                </div>
            );
        }
    };
};

export default withData;
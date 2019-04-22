import React, { Component } from "react";

import Spiner from "../spiner";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";

import "./item-details.css";

export const Record = ({ item, field, label }) => {
    return(
        <li className="list-group-item person-details__name">
            <span>{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
};

class ItemDetails extends Component{

    constructor(){
        super();

        this.state = {
            item: null,
            image: null,
            loading: false,
            view: false
        };

    }

    componentDidMount(){
        this.update();
    }
    
    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.update();
        }
    }
    
    update = () => {
        const { itemId, getData, getImageUrl } = this.props;

        if(!itemId){
            return;
        }
 
        this.setState({
            loading: true,
            view: false
        });
        
        getData(itemId)
            .then((item) => {
                
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false,
                    view: true
                });
            });

    }

    render(){

        const { item, loading, view, image } = this.state;

        const hasData = (!loading && view);

        const spiner = loading && !view ? <Spiner /> : null;

        const selected = !item ? <span className="selected">Selected a item from a list...</span> : null;

        const content = hasData && this.props.children ? <PersonView item={item} imageUrl={image} children={this.props.children} /> : null;

        return (
            <div className="person-details">

                {selected}
                {spiner}
                {content}

            </div>
        );
        
    }

};

const PersonView = ({ item, imageUrl, children }) => {

    const { name } = item;

    return (
        <ErrorBoundry>
            <div className="row ">
                <div className="col-sm-4">
                    <img src={imageUrl} className="person-details__img" alt={item.name} />
                </div>
                <div className="col-sm-8"> 
                    <h4 className="person-details__title">{ name }</h4>
                    <ErrorButton />
                    <ul className="list-group list-group-flush person-details__card">
                        { 
                            React.Children.map(children, (child) => {
                                

                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        </ErrorBoundry>
    );
};

export default ItemDetails;


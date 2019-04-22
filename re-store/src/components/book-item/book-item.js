import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';


import withBookStoreService from '../hoc/withBookStoreService';

import { compose } from "../../utils"

import { fetchBooks, bookAddedToCart, imgLoaded } from "../../actions"
import Spinner from "../spiner";
import ErrorIndicator from "../error-indicator";

import "./book-item.scss";


class BookItem extends Component{

    componentDidMount(){
        const { id } = this.props.match.params;

        this.props.fetchBooks();
    }

    render(){

        const { id } = this.props.match.params;

        const { books, loading, loadingImg, error, onAddedToCart, fetchImg } = this.props;
        let book;

        if(loading){
            return <Spinner />
        }
        if(error){
            return <ErrorIndicator message={error} />;
        }

        if(books.length){
            book = books.find((book) => {
                return book.id == id;
            });
        }

        const { title, coverImg, price, description } = book;

        const style = loadingImg ? {opacity: 1} : {opacity: 0};

        return(
            <div className="book-item row">
                <figure className="book-item__figure col-sm-4">
                    <div className="book-item__loading-img" style={style} ></div>
                    <img src={ coverImg } alt={ title } className="book-item__img" onLoad={ () => fetchImg() }  />
                </figure>
                <div className="book-item__about-product col-sm-8">
                    <h2 className="book-item__title">{ title }</h2>
                    <p className="book-item__discription">{ description }</p>
                    <h3 className="book-item__price">${ price }</h3>
                    <button
                        className="btn btn-info add-to-card"
                        onClick={() => onAddedToCart(id)} >Add to card</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ bookList: { books, article, loading, loadingImg, error }}) => {

    return {
        books,
        article,
        loading,
        loadingImg,
        error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookStoreService } = ownProps;
    return {
        fetchBooks: () => dispatch(fetchBooks(bookStoreService)()),
        fetchImg: () => dispatch(imgLoaded()),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(BookItem);
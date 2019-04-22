import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import BookListItem from "../book-list-item";
import withBookStoreService from '../hoc/withBookStoreService';

import  { fetchBooks, bookAddedToCart } from "../../actions";

import { compose } from "../../utils";

import Spinner from "../spiner";
import ErrorIndicator from "../error-indicator";

import "./book-list.scss";


const BookList = ({ books, onAddedToCart }) => {
    return(
        <ul className="book-list row">
            {
                books.map((book) => {
                    return(
                        <li key={book.id} className="book-list__item col-sm-6">
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

class BookListContainer extends Component{

    componentDidMount(){
        this.props.fetchBooks();
    }

    render(){
        const { books, loading, error, onAddedToCart } = this.props;

        if(loading) {
            return <Spinner />;
        }

        if(error){
            return <ErrorIndicator message={error} />;
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
};


const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const { bookStoreService } = ownProps;

    return bindActionCreators({
        fetchBooks: fetchBooks(bookStoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
}; 

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
import React from "react";

import { Link } from "react-router-dom";

import "./book-list-item.scss";

const BookListItem = ({ book, onAddedToCart }) => {
    const { id, title, author, price, coverImg } = book;
    return(
        <div className="book-list-item">
            <div className="book-list-item__cover">
                <img src={coverImg} className="book-list-item__img" alt={title} />
            </div>
            <div className="book-list-item__detail">
                <Link to={`article/${id}`} >{ title }</Link>
                <span className="book-list-item__author">{ author }</span>
                <span className="book-list-item__price text-info">${ price }</span>
                <button
                    className="btn btn-info add-to-card"
                    onClick={onAddedToCart} >Add to card</button>
            </div>
        </div>
        
    );
};

export default BookListItem;
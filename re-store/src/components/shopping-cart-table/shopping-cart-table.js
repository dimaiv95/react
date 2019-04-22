import React from "react";
import { connect } from 'react-redux';

import  { bookDeletedFromCart, allBooksDeletedFromCart, bookAddedToCart } from "../../actions";

import "./shopping-cart-table.scss";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, idx) => {
        const { id, title, count, price } = item;
        return (
            <tr key={idx + 1}>
                <td>{ idx + 1 }</td>
                <td>{ title }</td>
                <td>{ count }</td>
                <td>${ price }</td>
                <td className="text-right">
                    <button
                        type="button"
                        className="shopping-cart-table__btn btn btn-outline-success"
                        onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    <button
                        type="button"
                        className="shopping-cart-table__btn btn btn-outline-warning"
                        onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle"></i>
                    </button>
                    <button
                        type="button"
                        className="shopping-cart-table__btn btn btn-outline-danger"
                        onClick={() => onDelete(id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        );   
    };

    return(
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col" className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map( renderRow )
                    }
                   
                </tbody>
            </table>
            <div className="shopping-cart-table__total">Total: ${ total }</div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            dispatch(bookAddedToCart(id));
        },
        onDecrease: (id) => {
            dispatch(bookDeletedFromCart(id));
        },
        onDelete: (id) => {
            dispatch(allBooksDeletedFromCart(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
import React from "react";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import "./shop-header.scss"


const ShopHeader = ({ items, total }) => {

    const numItem = items.length ? items
                                    .map((item) => item.count)
                                    .reduce((prev, cur) => prev + cur)
                                : 0;

    return (
        <div className="shop-header">
            <Link to="/" className={"shop-header__title"} >ReStore</Link>
            <Link to="/cart" className={"shop-header__cart"} >
                <i className="fa fa-shopping-cart"></i>
                {numItem} items ( ${total} )
            </Link>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

export default connect(mapStateToProps)(ShopHeader);
import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product-box">
            <img src={product?.img} alt={product?.title} className="product-img" />
            <h6 className="product-title">{product?.title}</h6>
            <p className="product-description">{product?.description}</p>
            <p className="product-price">{product?.price}</p>
            <p className="product-size">{product?.size}</p>
        </div>
    );
};

export default Product;
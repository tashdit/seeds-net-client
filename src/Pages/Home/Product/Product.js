import React from 'react';
import "./Product.css"
const Product = ({ seed }) => {
    const { name, picture, descrition, price, } = seed
    return (
        <>
            <div className="col-lg-4 col-md-6 product-item">
                <div className="product-wrap">
                    <img src={picture} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4><span>Name:</span> {name}</h4>
                        <h4><span>Price</span> {price}</h4>
                        <p><span>Details</span> {descrition}</p>
                        <button>Purchess Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
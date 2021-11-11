import React from 'react';
import "./Product.css"
import { Link } from 'react-router-dom';
const Product = ({ seed }) => {
    const { name, picture, descrition, price, _id } = seed
    return (
        <>
            <div className="col-lg-4 col-md-6 product-item">
                <div className="product-wrap">
                    <img src={picture} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4><span>Name:</span> {name}</h4>
                        <h4><span>Price</span> {price}</h4>
                        <p><span>Details</span> {descrition}</p>
                        <Link to={`/booking/${_id}`}>
                            <button>Purchess Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
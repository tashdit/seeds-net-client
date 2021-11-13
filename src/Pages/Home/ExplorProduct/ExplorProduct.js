import React from 'react';
import "./ExplorProduct.css"
import { Link } from 'react-router-dom';
const ExplorProduct = ({ products }) => {
    const { picture, name, price, descrition, _id } = products
    return (
        <div className="col-lg-4 col-md-6 product-item">
            <div className="product-wrap">
                <img src={picture} className="img-fluid" alt="" />
                <div className="portfolio-info">
                    <h5><span>Name:</span> {name}</h5>
                    <h5><span>Price</span> {price}</h5>
                    <p><span style={{ color: '#009970', fontWeight: 'bold' }}>Details</span> {descrition}</p>
                    <Link to={`/booking/${_id}`}>
                        <button style={{ color: '#fff', fontWeight: 'bold' }}>Purchess Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExplorProduct;
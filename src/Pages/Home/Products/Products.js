import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"
const Products = () => {

    const [seeds, setSeeds] = useState([])
    //https://shielded-tundra-20828.herokuapp.com/

    //http://localhost:5000/seeds
    useEffect(() => {
        fetch(`https://shielded-tundra-20828.herokuapp.com/seeds`)
            .then(res => res.json())
            .then(data => setSeeds(data))
    }, [])

    return (
        <div className="products">
            <div className="container pt-5">
                <div className="section-title" >
                    <h2>Our Products</h2>
                </div>
                <div className="row">
                    {seeds.slice(0, 6).map(seed => <Product key={seed._id} seed={seed}></Product>)}
                </div>
            </div>
        </div>
    );
};

export default Products;
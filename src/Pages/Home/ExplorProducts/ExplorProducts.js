import React, { useState, useEffect } from 'react';
import ExplorProduct from '../ExplorProduct/ExplorProduct';
import Navigation from '../../Shared/Navigation/Navigation';
import "./ExplorProducts.css"
import Footer from '../Footer/Footer';
const ExplorProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://shielded-tundra-20828.herokuapp.com/seeds')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    console.log(allProducts);
    return (
        <>
            <Navigation></Navigation>
            <div className="products">
                <div className="container pt-5">
                    <div className="section-title" >
                        <h2>Our Products</h2>
                    </div>
                    <div className="row">
                        {allProducts.map(products => <ExplorProduct products={products}
                            key={products._id}></ExplorProduct>)}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ExplorProducts;
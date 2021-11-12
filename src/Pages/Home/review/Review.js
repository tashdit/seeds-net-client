import React, { useState, useEffect } from 'react';
import "./Review.css"
const Review = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://shielded-tundra-20828.herokuapp.com/seeReview`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <>
            <div className="container">
                <div className="section-title mt-5" >
                    <h2>Customer Review</h2>
                </div>
                <div className="review-text">
                    {review.map(item => <p key={item?._id} >{item.comments}</p>)}
                </div>
            </div>
        </>
    );
};

export default Review;
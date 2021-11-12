import React, { useState, useEffect } from 'react';

const Review = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://shielded-tundra-20828.herokuapp.com/seeReview`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    console.log(review);
    return (
        <>
            <div className="container">
                <div className="section-title" >
                    <h2>Review</h2>
                </div>
                <div className="review-text">
                    {review?.map(reviews => { <p>{reviews?.comments}</p> })}
                </div>
            </div>
        </>
    );
};

export default Review;
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const Review = () => {
    const { register, handleSubmit, } = useForm();
    const { user } = useAuth()

    const onSubmit = (data) => {
        console.log(data);
        fetch("https://shielded-tundra-20828.herokuapp.com/addSReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
    };
    return (
        <div>
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <textarea
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />

                <input
                    className="submit-btn mt-3"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Review;
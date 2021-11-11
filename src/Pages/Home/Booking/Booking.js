import React, { useState, useEffect } from 'react';
import "./Booking.css"
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Navigation from '../../Shared/Navigation/Navigation';
import "./Booking.css"




const Booking = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/singleProducts/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])




    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <Navigation></Navigation>

            <div className="booking-container container mt-5">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="product-wrap booking-item">
                            <img src={booking.picture} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><span>Name:</span> {booking.name}</h4>
                                <h4><span>Price</span> {booking.price}</h4>
                                <p><span>Details</span> {booking.descrition}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>booking Form</h1>
                        <form onSubmit=''>
                            <input
                                {...register("name")}
                                defaultValue={booking.name}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                // placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("comments")}
                                placeholder="comments"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("price", { required: true })}
                                defaultValue={booking.price}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                defaultValue={booking.picture}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                style={{ background: '#009970' }}
                                type="submit"
                                value="Order Now"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <section className="d-flex align-items-center hero">
                <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
                    <h1>Your New Online Presence with MMH Books</h1>
                    <h2>We are team of talented designers making websites with Mollah Masuk Helal</h2>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
        </div>
    );
};

export default Banner;
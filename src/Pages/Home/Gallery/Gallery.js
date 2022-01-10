import React from 'react';
import "./Gallery.css"
const Gallery = () => {
    return (
        <>
            <section id="portfolio" className="portfolio bg">
                <div className="container">

                    <div className="section-title" >
                        <h2>Best Selling Books</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>



                    <div className="row portfolio-container" >
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`https://i0.wp.com/vezendi.com/wp-content/uploads/2020/02/2020_02_20_AWAKE_COVER-orig_EBOOK-Best-seller-review-badge-bottom-ver.-bright-eps-640x1024.jpg?resize=498%2C796&ssl=1`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781510766556/the-world-almanac-and-book-of-facts-2022-9781510766556_hr.jpg`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`https://m.media-amazon.com/images/I/51zcMqY7GQL.jpg`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`https://jacobsmithdesign.files.wordpress.com/2014/12/perpetual-motivation.jpg?w=260&h=409`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`https://everydaypower.com/wp-content/uploads/2014/11/Screen-Shot-2015-06-21-at-12.37.01-PM.gif`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`https://m.media-amazon.com/images/I/613jyFtfH+L._SL500_.jpg`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`https://i.pinimg.com/736x/bd/22/5a/bd225ac134df6eeebf572febf6e6a31e.jpg`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`https://cdnwp-s3.benzinga.com/wp-content/uploads/2019/05/16194652/Screenshot-2019-05-16-15.44.58-1.png`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`https://i.harperapps.com/covers/9780062803375/x300.jpg`} className="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Gallery;
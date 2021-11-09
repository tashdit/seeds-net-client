import React from 'react';
import "./Gallery.css"
const Gallery = () => {
    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="section-title" >
                        <h2>Gallery</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>



                    <div className="row portfolio-container" >

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`https://www.usaid.gov/sites/default/files/styles/732_width/public/nodeimage/Bangladesh_Ag-RiceFarm.jpg`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`https://gbagrovetgroupbd.com/assets/backend/img/uploads/aboutUs/1698822163029628About.jpg`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`https://www.syngentafoundation.org/sites/g/files/zhg576/f/styles/syngenta_large/public/media/2020/06/30/smiling_farmer_1.jpeg?itok=tw8IuV8o`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`https://www.lightcastlebd.com/wp-content/uploads/2020/06/Agro_Farmers.jpg`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`https://www.unescap.org/sites/default/d8files/2020-05/processed.jpeg`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={`http://2.bp.blogspot.com/_nClLFOFAxw4/TDNPOqBGToI/AAAAAAAAAG4/x9OAlR_m3u4/s1600/31651_434766530914_171775155914_5998684_7776031_n.jpg`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`https://www.povertyactionlab.org/sites/default/files/styles/large/public/2021-04/bangladesh_south-asia_agriculture_farmer-harvesting-rice.jpg?itok=3R1Uq9b-`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIOnYqzth7KCAhoC52uuUyL9HDF9scpUCkg&usqp=CAU`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxCnW30vofJPt9-ER-Sne7fj0eskZathOkQ&usqp=CAU`} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Gallery;
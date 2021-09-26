import React from 'react';
import { NavLink } from "react-router-dom";

import './fe-footer.scss';

import asset_icon_check from './../../../assets/images/icons/icon-check-24.svg';
import asset_map_pin from './../../../assets/images/icons/icon-map-pin-24.svg';
import asset_call from './../../../assets/images/icons/icon-call-24.svg';
import asset_envelop from './../../../assets/images/icons/icon-envelop-24.svg';

const Footer = () => {

    const usefulLinks = [
        { title: 'Trainings', url: '/trainings' },
        { title: 'Partners', url: '/partners' },
        { title: 'Jobs', url: '/Jobs' },
        { title: 'Contact', url: '/Contact' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top py-5">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-3 text-left" data-aos="fade-right">
                            <div className="footer-heading">
                                {/* <img src="assets/img/logo-mytextbook.png" alt="coderatrix" width="175px"/> */}
                                <h4>Coderatrix</h4>
                            </div>
                            <div className="footer-site-desc mt-4">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the
                                1500s,
                            </div>

                        </div>

                        <div className="col-sm-6 col-md-3 mt-3 text-left">
                            <div className="footer-heading">
                                <h4 className="footer-h2">Useful Links</h4>
                            </div>
                            <div className="f-link-items mt-4">
                                {
                                    usefulLinks.map((item) => (
                                        <div className="f-link my-3" key={item.url}>
                                            <NavLink className="f-link-item" to={item.url} key={item.url}>
                                                <img src={asset_icon_check} className="me-2" alt="link-icon" />
                                                <span>{item.title}</span>
                                            </NavLink>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mt-3 text-left">
                            <div className="footer-heading">
                                <h4 className="footer-h2">Useful Links</h4>
                            </div>
                            <div className="f-link-items mt-4">
                                {
                                    usefulLinks.map((item) => (
                                        <div className="f-link my-3" key={item.url}>
                                            <NavLink className="f-link-item" to={item.url} key={item.url}>
                                                <img src={asset_icon_check} className="me-2" alt="link-icon" />
                                                <span>{item.title}</span>
                                            </NavLink>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mt-3 text-left">
                            <div className="footer-heading">
                                <h4 className="footer-h2">Address</h4>
                            </div>

                            <div className="f-link-items mt-4">
                                <div className="f-link my-3" >
                                    <a href="tel://+92 300 7425277" className="f-link-item">
                                        <img src={asset_map_pin} className="me-2" alt="link-icon" />
                                        +92 300 7425277
                                    </a>
                                </div>
                                <div className="f-link my-3">
                                    <a href="mailto:azhr.mughl@gmail.com" className="f-link-item">
                                        <img src={asset_call} className="me-2" alt="link-icon" />
                                        contact@coderatrix.com
                                    </a>
                                </div>
                                <div className="f-link my-3">
                                    <div className="f-link-item">
                                        <img src={asset_envelop} className="me-2" alt="link-icon" />
                                        Lahore, Punjab
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-md-flex align-items-center justify-content-between py-5">
                    <div className="copyright my-2">
                        © Copyright Coderatrix, All Rights Reserved
                    </div>
                    <div className="credits my-2">
                        Designed & Developed by &nbsp;
                        <a href="https://www.linkedin.com/in/muhammad-azhar-531753105/" target="_blank" rel="noreferrer">Azhar-M</a>
                    </div>
                </div>
            </div>


        </footer >
    );
};

export default Footer;
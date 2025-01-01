import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-content-list footer-content-1">
                            <div className="footer-list-content">
                                {/* <h1 className='footer-title'>About School</h1> */}
                                <div className="footer-list-logo">
                                    <img src={logo} alt="" />
                                </div>
                                <h1>Kingswood British College</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                        <div className="footer-content-list footer-content-2">
                            <div className="footer-list-content">
                                <h1 className="footer-title">Quick links</h1>
                                <ul>
                                    <li>
                                        <Link to="../">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="../about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="../contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="../admission">Admission</Link>
                                    </li>
                                    <li>
                                        <Link to="../facilities">Facilities</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-list footer-content-3">
                            <div className="footer-list-content">
                                <h1 className="footer-title">Contact Us</h1>
                                <div className="footer-contact-content">
                                    <i class="ri-phone-fill"></i>
                                    <h4>489, Pallama Road, Chillaw, Bangadeniya</h4>
                                </div>
                                <div className="footer-contact-content">
                                    <i class="ri-phone-fill"></i>
                                    <h4>0773838366</h4>
                                </div>
                                <div className="footer-contact-content">
                                    <i class="ri-phone-fill"></i>
                                    <h4>support@kingswoodbritish.com</h4>
                                </div>
                                <div className="footer-soical-media">
                                    <a href="">
                                        <i class="ri-instagram-line"></i>
                                    </a>
                                    <a href="">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                    <a href="">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                    <a href="">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content-list footer-content-4">
                            <div className="footer-list-content">
                                <h1 className="footer-title">Newsletter</h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Eaque veniam id quo quia? Harum sequi non cum, in velit hic!
                                </p>
                                <div className="footer-button">
                                    <input type="text" placeholder="Email Address" />
                                    <input type="submit" value="Subscribe" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-copyright">
                <div className="footer-container">
                    <p>
                        Copyright &copy; 2024 <a href="https://www.fuchsius.com">Fuchsius</a> All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
}

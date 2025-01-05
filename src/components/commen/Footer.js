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
                                <div className="footer-list-logo">
                                    <img src={logo} alt="Kingswood British College Logo" />
                                </div>
                                <h1>Kingswood British College</h1>
                                <p>
                                    Kingswood British College provides a high-quality education experience, fostering academic excellence and personal growth for every student. Located in Bangadeniya, our institution stands as a beacon of learning and innovation.
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
                                    <i className="ri-map-pin-line"></i>
                                    <h4>489, Pallama Road, Bangadeniya, Chilaw</h4>
                                </div>
                                <div className="footer-contact-content">
                                    <i className="ri-phone-fill"></i>
                                    <h4>+94 77 383 8366</h4>
                                </div>
                                <div className="footer-contact-content">
                                    <i className="ri-mail-line"></i>
                                    <h4>info@kingswoodbritish.com</h4>
                                </div>
                                <div className="footer-soical-media">
                                    <a href="https://www.facebook.com/kingswood" target="_blank" rel="noopener noreferrer" >
                                        <i className="ri-facebook-fill "></i>
                                    </a>
                                    <a href="https://www.instagram.com/kingswood" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                    <a href="https://www.youtube.com/kingswood" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-youtube-fill"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/kingswood" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content-list footer-content-4">
                            <div className="footer-list-content">
                                <h1 className="footer-title">Newsletter</h1>
                                <p>
                                    Stay updated with the latest news and events from Kingswood British College. Subscribe to our newsletter today!
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
                        Copyright &copy; 2024 <a href="https://www.fuchsius.com">Fuchsius</a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>

    );
}

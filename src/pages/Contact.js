import React, { useState } from 'react'

import './Contact.css'

import Nav from '../components/commen/Nav'
import Footer from '../components/commen/Footer'
import SubHeader from '../components/commen/SubHeader'
import FilePath from '../components/commen/FilePath'
import Title from '../components/commen/Title'

import Header from '../images/theme/background.jpg'

export default function Contact() {

    const [activeInputs, setActiveInputs] = useState({});

    // Handle focus event to activate the input
    const clickInput = (index) => {
        setActiveInputs((prev) => ({ ...prev, [index]: true }));
    };

    // Handle blur event to deactivate the input if empty
    const blurInput = (index, value) => {
        if (value === "") {
            setActiveInputs((prev) => ({ ...prev, [index]: false }));
        }
    };


    return (
        <>

            <Nav></Nav>
            <SubHeader title="Contact Us" image={Header}></SubHeader>
            <FilePath text="Contact Us" path="contact"></FilePath>

            <section className='contact-s1'>
                <Title
                    title='Contact'
                    description='Get in touch with us and we will get back to you as soon as possible.'
                    path='home'
                ></Title>
                <div className='container'>
                    <div className='contact-s1-c'>
                        <div className="contact-s1-c1">
                            {/* Input 1 */}
                            <div className="input1 input">
                                <input
                                    type="text"
                                    onFocus={() => clickInput("input1")}
                                    onBlur={(e) => blurInput("input1", e.target.value)}
                                />
                                <p className={activeInputs.input1 ? "active" : ""}>
                                    Full Name <span>*</span>
                                </p>
                            </div>

                            {/* Input 2 */}
                            <div className="input2 input mt-20">
                                <div className="input2-c">
                                    {/* Sub-input 1 */}
                                    <div className="input2-c1">
                                        <input
                                            type="text"
                                            onFocus={() => clickInput("input2-c1")}
                                            onBlur={(e) => blurInput("input2-c1", e.target.value)}
                                        />
                                        <p className={activeInputs["input2-c1"] ? "active" : ""}>
                                            Phone Number <span>*</span>
                                        </p>
                                    </div>

                                    {/* Sub-input 2 */}
                                    <div className="input2-c2">
                                        <input
                                            type="text"
                                            onFocus={() => clickInput("input2-c2")}
                                            onBlur={(e) => blurInput("input2-c2", e.target.value)}
                                        />
                                        <p className={activeInputs["input2-c2"] ? "active" : ""}>
                                            Email
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Input 1 (with mt-20) */}
                            <div className="input1 input mt-20">
                                <input
                                    type="text"
                                    onFocus={() => clickInput("input3")}
                                    onBlur={(e) => blurInput("input3", e.target.value)}
                                />
                                <p className={activeInputs.input3 ? "active" : ""}>
                                    Subject <span>*</span>
                                </p>
                            </div>

                            {/* Additional Input 2 (with mt-20) */}
                            <div className="input1 input mt-20 input-textarea">
                                <textarea
                                    type="text"
                                    onFocus={() => clickInput("input4")}
                                    onBlur={(e) => blurInput("input4", e.target.value)}
                                ></textarea>
                                <p className={activeInputs.input4 ? "active" : ""}>
                                    Message <span>*</span>
                                </p>
                            </div>
                            <div className='contact-button'>
                                <input type="submit" value="Send Message" />
                            </div>
                        </div>
                        <div className='contact-s1-c2'>
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps?q=Eiffel+Tower,Paris&output=embed"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-s2'>
                <div className='container'>
                    <div className='contact-s2-c'>
                        <div className='contact-s2-c1'>
                            <div className='contact-icon'>
                                <i class="ri-phone-fill"></i>
                            </div>
                            <div className='contact-details'>
                                <h3>Phone Number</h3>
                                <p>+94 7752 00 106</p>
                            </div>
                        </div>
                        <div className='contact-s2-c2'>
                            <div className='contact-icon'>
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <div className='contact-details'>
                                <h3>Address</h3>
                                <p>489, Pallama Road, Chillaw, Bangadeniya</p>
                            </div>
                        </div>
                        <div className='contact-s2-c3'>
                            <div className='contact-icon'>
                                <i class="bi bi-envelope-fill"></i>
                            </div>
                            <div className='contact-details'>
                                <h3>Email Address</h3>
                                <p>support@kingswoodbritish.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}

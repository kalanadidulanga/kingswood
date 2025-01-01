import React, { useState } from 'react'

import './Contact.css'
import './Admission.css'

import Nav from '../components/commen/Nav'
import Footer from '../components/commen/Footer'
import SubHeader from '../components/commen/SubHeader'
import FilePath from '../components/commen/FilePath'
import Title from '../components/commen/Title'

import Header from '../images/theme/background.jpg'

export default function Admission() {

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
            <SubHeader title="Admissions" image={Header}></SubHeader>
            <FilePath text="Admissions" path="admissions"></FilePath>

            <div className='admission-description'>
                <div className='container'>
                    <h1>Dear Parents/Guardians,</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, temporibus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit a delectus.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ol>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, temporibus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit a delectus.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ol>
                </div>
            </div>
            <div className='admission-application'>
                <div className='admission-application-content'>
                    <Title
                        title='Apply'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis.'
                        path='home'
                    ></Title>
                    <div className='admission-application-input'>

                        <div className="input1 input">
                            <input
                                type="text"
                                onFocus={() => clickInput("input1")}
                                onBlur={(e) => blurInput("input1", e.target.value)}
                            />
                            <p className={activeInputs.input1 ? "active" : ""}>
                            Parent's name <span>*</span>
                            </p>
                        </div>

                        

                        {/* Additional Input 1 (with mt-20) */}
                        <div className="input1 input mt-20">
                            <input
                                type="text"
                                onFocus={() => clickInput("input2")}
                                onBlur={(e) => blurInput("input2", e.target.value)}
                            />
                            <p className={activeInputs.input2 ? "active" : ""}>
                            Parent's contact number <span>*</span>
                            </p>
                        </div>

                        {/* Additional Input 1 (with mt-20) */}
                        <div className="input1 input mt-20">
                            <input
                                type="text"
                                onFocus={() => clickInput("input3")}
                                onBlur={(e) => blurInput("input3", e.target.value)}
                            />
                            <p className={activeInputs.input3 ? "active" : ""}>
                            Parent's email address <span>*</span>
                            </p>
                        </div>

                        {/* Additional Input 1 (with mt-20) */}
                        <div className="input1 input mt-20">
                            {/* <input
                                type="text"
                                onFocus={() => clickInput("input4")}
                                onBlur={(e) => blurInput("input4", e.target.value)}
                            /> */}
                            <select>
                                <option value="">Anuradhapura</option>
                                <option value="">Anuradhapura</option>
                            </select>
                            
                        </div>

                        {/* Additional Input 1 (with mt-20) */}
                        <div className="input1 input mt-20">
                            <input
                                type="text"
                                onFocus={() => clickInput("input5")}
                                onBlur={(e) => blurInput("input5", e.target.value)}
                            />
                            <p className={activeInputs.input5 ? "active" : ""}>
                            Your child’s age <span>*</span>
                            </p>
                        </div>

                        {/* Additional Input 1 (with mt-20) */}
                        <div className="input1 input mt-20">
                            <input
                                type="text"
                                onFocus={() => clickInput("input6")}
                                onBlur={(e) => blurInput("input6", e.target.value)}
                            />
                            <p className={activeInputs.input6 ? "active" : ""}>
                            Child's name <span>*</span>
                            </p>
                        </div>
                        <div className='contact-button'>
                            <input type="submit" value="Send Message" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

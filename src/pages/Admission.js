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

            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Dear Parents/Guardians,</h1>

                <p className="mb-6">
                    Welcome to Kingswood British College. Since our establishment in January 2017,
                    we have been committed to providing quality education from pre-primary to Advanced level.
                    Our college maintains affordable charges for all categories while delivering excellence in education.
                </p>

                <h2 className="text-xl font-semibold mb-4">Admission Requirements:</h2>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Students must maintain 80% attendance throughout the academic year</li>
                    <li>Students must arrive before 7:45 AM</li>
                    <li>English is our primary medium of communication</li>
                    <li>Parents must participate in regular parent-teacher meetings</li>
                    <li>Students must follow the school's disciplinary guidelines</li>
                </ol>

                <h2 className="text-xl font-semibold mb-4">Fee Structure:</h2>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Pre-Primary Admission Fee: LKR 50,000</li>
                    <li>Primary/Secondary Admission Fee: LKR 75,000</li>
                    <li>Term fees are structured to be affordable for all</li>
                    <li>Additional fees may apply for special programs and activities</li>
                    <li>Fees are subject to review on an annual basis</li>
                </ol>
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
                                <option value="">Select Campus</option>
                                <option value="chilaw">Chilaw (Bangadeniya)</option>
                                <option value="anamaduwa">Anamaduwa</option>
                                <option value="negombo">Negombo</option>
                                <option value="anuradhapura">Anuradhapura</option>
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

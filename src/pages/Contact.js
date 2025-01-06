import React, { useState } from "react";

import "./Contact.css";

import Nav from "../components/commen/Nav";
import Footer from "../components/commen/Footer";
import SubHeader from "../components/commen/SubHeader";
import FilePath from "../components/commen/FilePath";
import Title from "../components/commen/Title";

import Header from "../images/theme/background.jpg";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

export default function Contact() {
    const [activeInputs, setActiveInputs] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const { fetch, loading, error } = useAxios();

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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataObject = new FormData();
            Object.entries(formData).forEach(([key, value]) =>
                formDataObject.append(key, value)
            );

            const res = await fetch({
                method: "POST",
                url: "/api/contact",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formDataObject,
            });

            console.log(res);

            // if (res.data.success) {
            toast.success("Message sent successfully!");
            setFormData({
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            });
            // }
            setActiveInputs({});
        } catch (err) {
            console.error("Error sending message:", err);
            toast.error("Failed to send message. Please try again.");
        }
    };

    // Update formData state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <Nav></Nav>
            <SubHeader title="Contact Us" image={Header}></SubHeader>
            <FilePath text="Contact Us" path="contact"></FilePath>

            <section className="contact-s1">
                <Title
                    title="Contact"
                    description="Get in touch with us and we will get back to you as soon as possible."
                    path="home"
                ></Title>
                <div className="container !mt-5">
                    <div className="w-full h-auto flex flex-col md:flex-row items-center gap-8">
                        <form onSubmit={handleSubmit} className=" contact-s1-c1 w-full">
                            {/* <div className="contact-s1-c1"> */}
                            {/* Input 1 */}
                            <div className="input1 input">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onFocus={() => clickInput("input1")}
                                    onBlur={(e) => blurInput("input1", e.target.value)}
                                    onChange={handleChange}
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
                                            name="phone"
                                            value={formData.phone}
                                            onFocus={() => clickInput("input2-c1")}
                                            onBlur={(e) => blurInput("input2-c1", e.target.value)}
                                            onChange={handleChange}
                                        />
                                        <p
                                            className={
                                                activeInputs["input2-c1"] ? "active" : ""
                                            }
                                        >
                                            Phone Number <span>*</span>
                                        </p>
                                    </div>

                                    {/* Sub-input 2 */}
                                    <div className="input2-c2">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onFocus={() => clickInput("input2-c2")}
                                            onBlur={(e) => blurInput("input2-c2", e.target.value)}
                                            onChange={handleChange}
                                        />
                                        <p
                                            className={
                                                activeInputs["input2-c2"] ? "active" : ""
                                            }
                                        >
                                            Email
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Input 1 */}
                            <div className="input1 input mt-20">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onFocus={() => clickInput("input3")}
                                    onBlur={(e) => blurInput("input3", e.target.value)}
                                    onChange={handleChange}
                                />
                                <p className={activeInputs.input3 ? "active" : ""}>
                                    Subject <span>*</span>
                                </p>
                            </div>

                            {/* Additional Input 2 */}
                            <div className="input1 input mt-20 input-textarea">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onFocus={() => clickInput("input4")}
                                    onBlur={(e) => blurInput("input4", e.target.value)}
                                    onChange={handleChange}
                                ></textarea>
                                <p className={activeInputs.input4 ? "active" : ""}>
                                    Message <span>*</span>
                                </p>
                            </div>
                            <div className="contact-button">
                                <input
                                    type="submit"
                                    value={loading ? "Sending..." : "Send Message"}
                                    disabled={loading}
                                />
                            </div>
                            {error && <p className="error">Error: {error.message}</p>}
                            {/* </div> */}
                        </form>
                        <div className=" w-full h-[300px] lg:w-1/2">
                            <iframe
                                title="Google Map"
                                allowFullScreen=""
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.513583812337!2d79.82728039999999!3d7.6277829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2cba69e7465b7%3A0x2ceac8f17f36ee66!2sKingswood%20British%20College!5e0!3m2!1sen!2slk!4v1736069079641!5m2!1sen!2slk"
                                // width="600"
                                // height="450"
                                className=" w-full h-full object-cover object-center"
                                style={{ border: 0 }}
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-s2">
                <div className="container">
                    <div className="contact-s2-c">
                        <div className="contact-s2-c1">
                            <div className="contact-icon">
                                <i className="ri-phone-fill"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Phone Number</h3>
                                <p>+94 7752 00 106</p>
                            </div>
                        </div>
                        <div className="contact-s2-c2">
                            <div className="contact-icon">
                                <i className="bi bi-geo-alt-fill"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Address</h3>
                                <p>489, Pallama Road, Chillaw, Bangadeniya</p>
                            </div>
                        </div>
                        <div className="contact-s2-c3">
                            <div className="contact-icon">
                                <i className="bi bi-envelope-fill"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Email Address</h3>
                                <p>support@kingswoodbritish.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

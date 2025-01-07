import React, { useState } from "react";
import "./Contact.css";
import "./Admission.css";

import Nav from "../components/commen/Nav";
import Footer from "../components/commen/Footer";
import SubHeader from "../components/commen/SubHeader";
import FilePath from "../components/commen/FilePath";
import Title from "../components/commen/Title";

import Header from "../images/theme/background.jpg";
import useAxios from "../hooks/useAxios"; // Import the custom Axios hook
import { toast } from "react-hot-toast";

export default function Admission() {
    const [formData, setFormData] = useState({
        parentName: "",
        parentContact: "",
        parentEmail: "",
        campus: "",
        childAge: "",
        childName: "",
    });

    const [activeInputs, setActiveInputs] = useState({});
    const { fetch, loading } = useAxios();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
                url: "/api/admission", // Adjust this URL if necessary
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formDataObject,
            });

            if (res.data.success) {
                toast.success("Application submitted successfully!");
                setFormData({
                    parentName: "",
                    parentContact: "",
                    parentEmail: "",
                    campus: "",
                    childAge: "",
                    childName: "",
                });
                setActiveInputs({});
            }
        } catch (error) {
            toast.error("Failed to submit application. Please try again.");
            console.error("Error submitting application:", error);
        }
    };

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
            <Nav />
            <SubHeader title="Admissions" image={Header} />
            <FilePath text="Admissions" path="admissions" />
            <div className="max-w-4xl mx-auto px-4 pt-8">
                <h1 className="text-3xl font-bold mb-6">Dear Parents/Guardians,</h1>
                <p className="mb-6">
                    Welcome to Kingswood British College. Since our establishment in January 2017, we have
                    been committed to providing quality education from pre-primary to Advanced level. Our
                    college maintains affordable charges for all categories while delivering excellence in
                    education.
                </p>
                {/* <h2 className="text-xl font-semibold mb-4">Admission Requirements:</h2> */}
                {/* Admission Requirements and Fee Structure */}
            </div>
            <div className="admission-application">
                <div className="admission-application-content">
                    <Title
                        title="Apply"
                        description="Please fill out the form below to apply for admission at Kingswood British College."
                        path="home"
                    />
                    <form onSubmit={handleSubmit}>
                        <div className="admission-application-input">
                            <div className="input1 input">
                                <input
                                    type="text"
                                    name="parentName"
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    onFocus={() => clickInput("input1")}
                                    onBlur={(e) => blurInput("input1", e.target.value)}
                                    required
                                />
                                <p className={activeInputs.input1 ? "active" : ""}>
                                    Parent's name <span>*</span>
                                </p>
                            </div>

                            <div className="input1 input mt-20">
                                <input
                                    type="text"
                                    name="parentContact"
                                    value={formData.parentContact}
                                    onChange={handleChange}
                                    onFocus={() => clickInput("input2")}
                                    onBlur={(e) => blurInput("input2", e.target.value)}
                                    required
                                />
                                <p className={activeInputs.input2 ? "active" : ""}>
                                    Parent's contact number <span>*</span>
                                </p>
                            </div>

                            <div className="input1 input mt-20">
                                <input
                                    type="email"
                                    name="parentEmail"
                                    value={formData.parentEmail}
                                    onChange={handleChange}
                                    onFocus={() => clickInput("input3")}
                                    onBlur={(e) => blurInput("input3", e.target.value)}
                                    required
                                />
                                <p className={activeInputs.input3 ? "active" : ""}>
                                    Parent's email address <span>*</span>
                                </p>
                            </div>

                            <div className="input1 input mt-20">
                                <select
                                    name="campus"
                                    value={formData.campus}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Campus</option>
                                    <option value="chilaw">Chilaw (Bangadeniya)</option>
                                    <option value="anamaduwa">Anamaduwa</option>
                                    <option value="negombo">Negombo</option>
                                    <option value="anuradhapura">Anuradhapura</option>
                                </select>
                            </div>

                            <div className="input1 input mt-20">
                                <input
                                    type="number"
                                    name="childAge"
                                    value={formData.childAge}
                                    onChange={handleChange}
                                    onFocus={() => clickInput("input5")}
                                    onBlur={(e) => blurInput("input5", e.target.value)}
                                    required
                                />
                                <p className={activeInputs.input5 ? "active" : ""}>
                                    Your child’s age <span>*</span>
                                </p>
                            </div>

                            <div className="input1 input mt-20">
                                <input
                                    type="text"
                                    name="childName"
                                    value={formData.childName}
                                    onChange={handleChange}
                                    onFocus={() => clickInput("input6")}
                                    onBlur={(e) => blurInput("input6", e.target.value)}
                                    required
                                />
                                <p className={activeInputs.input6 ? "active" : ""}>
                                    Child's name <span>*</span>
                                </p>
                            </div>
                            <div className="contact-button">
                                <button type="submit" disabled={loading} className=" bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/80">
                                    {loading ? "Submitting..." : "Submit Application"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

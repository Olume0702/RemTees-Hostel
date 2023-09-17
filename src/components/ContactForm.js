import React, { useState } from 'react';
import '../styles.css';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to a server or perform client-side validation.
        console.log(formData);
    };

    return (
        <div className="form-container mb-4"> {/* Added margin-bottom */}
            <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Type your message here"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center"> {/* Center the button */}
                    <button type="submit" className="form-submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

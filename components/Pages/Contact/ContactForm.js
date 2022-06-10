import React, {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import useForm from "../../../hooks/useForm";

const sendFormData = async (dataToSubmit) => {
    console.log("dataToSubmit", dataToSubmit);
    const req = await fetch("/api/contact", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
    });
    const res = await req.json();
    return res;
};

const ContactForm = () => {
    const [formData, setFormData] = useForm({
        userName: "",
        userEmail: "",
        userPhone: "",
        userMessage: "",
    });



    const [successMessage, setSuccessMessage] = React.useState();

    const { userName, userEmail, userPhone, userMessage } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userFormData = {
            name: userName,
            email: userEmail,
            phone: userPhone,
            message: userMessage,
        };
        const res = await sendFormData(userFormData);
        setSuccessMessage(res.response);
    };
    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form__group">
                <input
                    name="userName"
                    type="text"
                    value={userName}
                    required
                    onChange={setFormData}
                />
                <label>Name</label>
            </div>

            <div className="contact-form__group">
                <input
                    name="userEmail"
                    type="text"
                    value={userEmail}
                    required
                    onChange={setFormData}
                />
                <label>Email</label>
            </div>

            <div className="contact-form__group">
                <input
                    name="userPhone"
                    type="text"
                    value={userPhone}
                    required
                    onChange={setFormData}
                />
                <label>Phone</label>
            </div>
            <div className="contact-form__group">
                <TextareaAutosize
                    required
                    onChange={setFormData}
                    name="userMessage"
                    value={userMessage}
                />
                <label>Message</label>
            </div>

            <div className="contact-form__services">
                <span>Me interesa el servicio de...</span>
               <div className="contact-form__services--options">
               <div >
                    <input type="checkbox"/>
                    <label>Ecommerce</label>
                </div>

                <div>
                    <input type="checkbox"/>
                    <label>UX/UI</label>
                </div>

                <div>
                    <input type="checkbox"/>
                    <label>Desarrollo Web</label>
                </div>

                <div>
                    <input type="checkbox"/>
                    <label>Branding</label>
                </div>

                <div>
                    <input type="checkbox"/>
                    <label>Marketing</label>
                </div>


               </div>
            </div>

            <div className="contact-form__file">
                <label>Tenes un brief que quieras compartir?</label>
                <input type="file"  />
            </div>

            {successMessage && (
                <span
                    style={{ color: "light-green" }}
                    className="contact-form__message"
                >
                    {successMessage}
                </span>
            )}

            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;

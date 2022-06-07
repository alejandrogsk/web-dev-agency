import React from 'react'


import TextareaAutosize from 'react-textarea-autosize';

const contact = () => {
  return (
    <section className="contact-section p-layout">
        <div className="contact-section__content">
            <h1>Estamos encantados de conocerte</h1>
            <p>No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en don, resó como texto de relleno en don.</p>
            <span></span>
        </div>
        <div className="contact-section__form">

            <form className="contact-form">
                <div className="contact-form__group">
                    <input 
                        name="userName" type="text"
                        required
                        />
                        <label>Name</label>
                </div>

                <div className="contact-form__group">
                    <input 
                        name="userEmail" type="text"
                        required
                        />
                        <label>Email</label>
                </div>

                <div className="contact-form__group">
                    <input 
                        name="userPhone" type="text"
                        required
                        />
                        <label>Phone</label>
                </div>
                <div className="contact-form__group">
                <TextareaAutosize required />
                        <label>Message</label>
                </div>

                <button type="submit">Send form</button>

               
            </form>

        </div>
    </section>
  )
}

export default contact
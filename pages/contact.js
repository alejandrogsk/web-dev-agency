export default function  contact() {
    return(
        <h1>Contact page</h1>
    )
}

/*import React from 'react'


import TextareaAutosize from 'react-textarea-autosize';

const sendFormData = async (dataToSubmit) => {
    console.log('dataToSubmit',dataToSubmit)
    const req = await fetch('/api/contact', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(dataToSubmit)
    });
    const res = await req.json();
    return res
}


const contact = () => {

    const [ formData, setFormData ] = React.useState({
        name:"alejandro",
        email: "alejandrogsk9900@gmail.com",
        phone: "1233214124",
        message: "Hola tengo pesado hacer una tienda online y me gustaría saber cuanto cuesta, es para una empresa de amoblamientos"
    })

    const [successMessage, setSuccessMessage] = React.useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await sendFormData(formData)
        setSuccessMessage(res.response)
    }
  return (
    <section className="contact-section p-layout">
        <div className="contact-section__content">
            <h1>Estamos encantados de conocerte</h1>
            <p>No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en don, resó como texto de relleno en don.</p>
            <span></span>
        </div>
        <div className="contact-section__form">

            <form onSubmit={handleSubmit} className="contact-form">
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

                 {
                    successMessage && <span>{successMessage}</span>
                 }   

                <button type="submit">Send form</button>

               
            </form>

        </div>
    </section>
  )
}

export default contact*/

import HeadComponent from "../components/Global/Head";
import Layout from "../components/Global/Layout";
import ContactForm from "../components/Pages/Contact/ContactForm";


export default function  contact() {
    return(


<div>
<HeadComponent
    title="Agencia especializada diseño y desarrollo de ECOMMERCE | 2022" 
    metaDescription="Tu tienda online a medida. Creamos tu tienda para que puedas comenzar a VENDER más online en 2022"
  />

<Layout>
    <main className="relative overflow-x-clip">
    <section className="contact-section p-layout ">
        <div className="contact-section__content">
            
            <h1>Estamos encantados de conocerte<span className="orange-point">.</span></h1>
            <p>No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en don, resó como texto de relleno en don.</p>
            <span>smooth@design.com</span>
        </div>
        <div className="contact-section__form">

        <ContactForm />
            

        </div>

        <svg className='contact-section__svg' width="1000" height="921" viewBox="0 0 1000 921" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0068 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z" fill="url(#paint0_linear_461_2)"/>
<defs>
<linearGradient id="paint0_linear_461_2" x1="1000" y1="460.143" x2="0" y2="460.143" gradientUnits="userSpaceOnUse">
<stop stopColor="#F84525"/>
<stop offset="1" stopColor="#FFC300"/>
</linearGradient>
</defs>
</svg>

    </section>
    </main>
</Layout>
</div>
    )
}



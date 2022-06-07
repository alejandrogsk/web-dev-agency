export default async function formSubmit(req,res) {
    let nodemailer = require('nodemailer')
    try {

        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.NODEMILER_USER_EMAIL,
                pass: process.env.NODEMILER_USER_PASS,
            },
            secure: true,
        });
        
        const { name, email, message, phone } = await req.body;
 
        const mailData = {
            from: email,
            to: "alejandrogsk9900@gmail.com",
            subject: `${name} ${phone}`,
            text: message,
            //html: <div>{message}</div>
        }

        transporter.sendMail(mailData, function(err,info){
            if(err) {
                return res.status(400).json({ response: `Lo siento, no se pudo procesar tu formulario, intena contactarno por nuestro email: smoothdesign.com` })
            }
            else {
                return res.status(200).json({ response: `Gracias por contactarnos, nos comunicaremos con usted a la brevedad` })
            }
        })

        
    } catch (error) {
        res.status(400).json({ response: `Lo siento, no se pudo procesar tu formulario, intena contactarno por nuestro email: smoothdesign.com` })
    }
}
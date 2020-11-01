const nodemailer = require("nodemailer");


function crearMailer(credencial) {
   

      
            const transporter = nodemailer.createTransport({
                service: "hotmail",
                auth: {
                    user: credencial.user,
                    pass: credencial.pass
                }
                
            })
           
        
        return {
        transporter,
        sendMail (sobre){
            
            const options = {
                from: sobre.from,
                to: sobre.mail,
                subject: sobre.titulo,
                text: sobre.mensaje,
                attachments: [
                    {
                        path: sobre.adjunto
                    }]

            }

            this.transporter.sendMail(options, (err, info) => {
                if (err) {
                   throw err
                } else {
                    console.log("Correo enviado con exito " + info.envelope.to)
                }
            })

        }
    }
}
module.exports = { crearMailer }
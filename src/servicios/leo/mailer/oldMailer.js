const nodemailer = require("nodemailer");


function enviarMail(mail,titulo, mensaje, pathAdjunto)  {

    const trasporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "tu.ombligo@hotmail.com",
            pass: "cipocaciopia-"
        }
    });
 
    const options = {
        from: "tu.ombligo@hotmail.com",
        to: mail,
        subject: titulo,
        text: mensaje,
        attachments: [
            {
                path: pathAdjunto
            }]

    }

    trasporter.sendMail(options, (err, info) => {
        if (err) {
            throw new Error("error en el evnvio")
        }else{
        console.log("Correo enviado con exito " )
        }
    })
}
module.exports = { enviarMail}
const nodemailer = require("nodemailer");
function crearMailer(credencial) {



    const transporter = nodemailer.createTransport({
        service: credencial.servicio
        ,
        auth: {
            user: credencial.user,
            pass: credencial.pass
        }

    })



    return {
     
        sendMail(sobre) {
            if (!esCorreoElectronico(sobre.mail)) {
                throw new Error("El email de destino es incorrecto")
            }
            if (!esCorreoElectronico(sobre.from)) {
                throw new Error("El email de origen es incorrecto")
            }
             if (!validarString(sobre.titulo)){
                 throw new Error( "el asunto no puede estar vacio")
             }
             if (!validarString(sobre.mensaje)){
                throw new Error( "el mensaje no puede estar vacio")
            }
           

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

            transporter.sendMail(options, (err, info) => {
                if (err) {
                    throw err
                } else {
                    console.log("Correo enviado con exito " + info.envelope.to)
                }
            })

        }
    }


}

const esCorreoElectronico = correoElectronico => /\S+@\S+/.test(correoElectronico);

function validarString(msg){
    let stringValido = false
    if (msg != ""){
        stringValido = true
    }
    return stringValido
}
module.exports = { crearMailer }
const { crearMailer } = require('../servicios/leo/mailer/mailer.js')


function crearFactoryMailer() {

    const credencial = {}
    credencial.user = "exampletaller@outlook.com"
    credencial.pass = "leo12345"
    credencial.servicio = "outlook"



    return {
        getMailer: ()=>{
            const obj = crearMailer(credencial)
            return obj
        },

        // usar DTO, siento que esto se repite mucho en el servicio/mailer
        getSobre: ({mail,asunto, texto, pdf}) => {
            const sobre = {
                from: credencial.user,
                to: mail,
                subject: asunto,
                text: texto,
                attachments: [
                    {
                        path: pdf
                    }]
            }
            return sobre 

            }
    }
    


}

module.exports = { crearFactoryMailer }


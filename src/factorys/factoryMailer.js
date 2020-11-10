const { crearMailer } = require('../servicios/leo/mailer/mailer.js')
//completar const pdfFactura = require(); 
//completar const notificador = require()

function factoryMailer() {

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
        getSobre: (objeto) => {
            const sobre = {
                from: credencial.user,
                to: objeto.mail
                // porque aca tengo que poner los textos del mail , tiene senti
            }
            return sobre 

            }
    }
    


}

module.exports = { factoryMailer }


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

        getSobreVenta: ({pasajero,pdf}) => {
            const sobre = {
                from: credencial.user,
                to: pasajero.mail,
                subject:"Su compra fue exitosa",
                text: "Gracias por volar en nuestra aerolinea, adjuntamos su boleto",
                attachments: [
                    {
                        path: pdf
                    }]
            }
            return sobre 
            },
            getSobreCancelacion: ({pasajero,pdf}) => {
                const sobre = {
                    from: credencial.user,
                    to: pasajero.mail,
                    subject:"Cancelacion exitosa",
                    text: " Lamentamos su cancelación, esperamos volar con usted proximamente",
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


const { crearMailer } = require('../servicios/leo/mailer/mailer.js')
//completar const pdfFactura = require(); 
//completar const notificador = require()

function getMailer() {

    const credencial = {}
    credencial.user = "exampletaller@outlook.com"
    credencial.pass = "leo12345"
    credencial.servicio = "outlook"


    const obj = mailer.crearMailer(credencial)
    return obj
}

module.exports = { getMailer }


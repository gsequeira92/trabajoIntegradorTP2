const mailer = require("./mailer")

const envelope = {}
envelope.mail = "frasescortas@gmail.com"
envelope.adjunto = "C:/Users/lpret/Desktop/ORT/C3/T2/Taller/src/castor.jpg";
envelope.mensaje = "Probando el módulo, enviando un castor :) ";
envelope.titulo = "probando";
envelope.from = "exampletaller@outlook.com"

const credencial ={}
credencial.user = "exampletaller@outlook.com"
credencial.pass = "leo12345"
credencial.servicio ="outlook"

 try{
   const obj = mailer.crearMailer(credencial)
   obj.sendMail(envelope)
 } catch(e){
   console.log(e.message) 
 }
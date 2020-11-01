const mail = require("./oldMailer.js")


//const adjunto = "/Users/l30/Desktop/ORT/C3/T2/modulo_1/src/castor.jpg";
const adjunto = "/Users/l30/Documents/GitHub/Taller/src/castor.jpg"
const mensaje = "Probando el módulo, enviando un castor :) ";
const titulo = "Funcionó?";


mail.enviarMail("frasescortas@gmail.com",titulo, mensaje, adjunto)
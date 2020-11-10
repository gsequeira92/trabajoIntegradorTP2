//const { generarPdfBillete } = require("./appBilleteVuelo");
const { generarFactura } = require("./appFacturaVuelo");
//const { generarFacturaCancelada } = require("./appFacturaCancelacionVuelo");

const objeto = {
    avion:{ "modeloAvion": "BOEING 737 JET",
            "numeroAvion": "5312563643",   
            "capacidad":  "132"
    },
    reserva:{ "idReserva" : "1",
              "idVuelo" : "2938",
              "destino" : "NYC New York, United States",
              "origen" : "EZE Buenos Aires, Argentina",
              "asiento" : "40H",
              "clase" : "economica",
              "comidaSinTacc" : "NO"
    },
    pasajero:{ "nombre": "Pepe Carlos",
               "apellido" : "Argento", 
               "dni": "20724829", 
               "email" : "pepeargento@gmail.com"
},
     vuelo:{
            "precio":"120.382,00", 
            "duracion":"11:00",
            "partida":"JUEVES 04 SEPTIEMBRE",
            "arribo" : "VIERNES 05 SEPTIEMBRE",
            "horaPartida" : "12:50 PM",
            "horaLlegada" : "4:15 AM",
            "millaje" : "8.720 km",
            "idAeropuerto1" : "23",
            "idAeropuerto2" : "18"
},
    aeropuerto2:{
            "nombre":"Nueva York, United States", 
            "aeropuerto": "JFK",
            "terminal" : "3"
},
    aeropuerto1:{
            "ciudad":"Buenos Aires, Argentina", 
            "codigo": "EZE",
            "terminal" : "C"
}}

//nombreArchivo = `pdfTestBillete`;
nombreArchivo = `pdfTestFactura`;
//nombreArchivo = `pdfTestFacturaCancelada`;
rutaArchivo = `src/servicios/mati/pdfs/`;

async function main() {
    try {
        //generarPdfBillete(nombreArchivo, rutaArchivo, objeto) 
        generarFactura(nombreArchivo, rutaArchivo, objeto) 
        //generarFacturaCancelada(nombreArchivo, rutaArchivo, objeto) 
        
    }
    catch (err) {
        console.log('Error ' + err)
    }

}
main()
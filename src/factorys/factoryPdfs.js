const { generarPdfBillete } = require("./appBilleteVuelo");
const { generarFactura } = require("./appFacturaVuelo");
const { generarFacturaCancelada } = require("./appFacturaCancelacionVuelo");

//FACTORY BILLETE VUELO

function factoryBilleteVuelo({unNombreArchivo,unaRutaArchivo, objeto}) {
    
    nombreArchivo= unNombreArchivo;
    rutaArchivo = unaRutaArchivo;
    //nombreArchivo = `pdfTestFacturaCancelada`;
    //rutaArchivo = `src/servicios/mati/pdfs/`;
    const objeto = {
        avion: {
            "modeloAvion": "BOEING 737 JET",//
        },
        reserva: {
            "idReserva": "1",//
            "idVuelo": "2938",//
            "asiento": "40H",//
            "comidaSinTacc": "NO"//
        },
        pasajero: {
            "nombre": "Pepe Carlos",//
            "apellido": "Argento", //
            "dni": "20724829", //
        },
        vuelo: {
            "duracion": "11:00",//
            "partida": "JUEVES 04 SEPTIEMBRE",//
            "arribo": "VIERNES 05 SEPTIEMBRE",//
            "horaPartida": "12:50 PM",//
            "horaLlegada": "4:15 AM",//
            "millaje": "8.720 km",//
        },
        aeropuerto2: {
            "ciudad": "Nueva York, United States", //
            "codigo": "JFK",//
            "terminal": "3"//
        },
        aeropuerto1: {
            "ciudad": "Buenos Aires, Argentina", //
            "codigo": "EZE",//
            "terminal": "C"//
        }
    }
    async function main() {
        try {
            generarPdfBillete(nombreArchivo, rutaArchivo, objeto) 
        }
        catch (err) {
            console.log('Error ' + err)
        }

    }
    main()
}

//FACTORY FACTURA
function factoryFactura({unNombreArchivo,unaRutaArchivo}) {
    
    nombreArchivo= unNombreArchivo;
    rutaArchivo = unaRutaArchivo;
    //nombreArchivo = `pdfTestFacturaCancelada`;
    //rutaArchivo = `src/servicios/mati/pdfs/`;
    const objeto = {
        avion:{ "modeloAvion": "BOEING 737 JET",//
                "numeroAvion": "5312563643",   //
        },
        reserva:{ "idReserva" : "1",//
                  "idVuelo" : "2938",//
                  "destino" : "NYC New York, United States",//
                  "origen" : "EZE Buenos Aires, Argentina",//
                  "asiento" : "40H",//
        },
        pasajero:{ "nombre": "Pepe Carlos",//
                   "apellido" : "Argento", //
                   "dni": "20724829", //
                   "email" : "pepeargento@gmail.com"//
    },
         vuelo:{
                "precio":"120.382,00", //
                "duracion":"11:00",//
    },
        aeropuerto2:{
                "codigo": "JFK",//
    },
        aeropuerto1:{
                "codigo": "EZE",//
    }
    }
    async function main() {
        try {
            generarFactura(nombreArchivo, rutaArchivo, objeto) 
        }
        catch (err) {
            console.log('Error ' + err)
        }

    }
    main()
}


//FACTORY FACTURA CANCELADA
function factoryFacturaCancelada({unNombreArchivo,unaRutaArchivo}) {

    nombreArchivo= unNombreArchivo;
    rutaArchivo = unaRutaArchivo;
    //nombreArchivo = `pdfTestFacturaCancelada`;
    //rutaArchivo = `src/servicios/mati/pdfs/`;
    const objeto = {
        avion:{ "modeloAvion": "BOEING 737 JET",//
                "numeroAvion": "5312563643",   //
        },
        reserva:{ "idReserva" : "1",//
                  "idVuelo" : "2938",//
                  "destino" : "NYC New York, United States",//
                  "origen" : "EZE Buenos Aires, Argentina",//
                  "asiento" : "40H",//
        },
        pasajero:{ "nombre": "Pepe Carlos",//
                   "apellido" : "Argento", //
                   "dni": "20724829", //
                   "email" : "pepeargento@gmail.com"//
    },
         vuelo:{
                "precio":"120.382,00", //
                "duracion":"11:00",//
    },
        aeropuerto2:{
                "codigo": "JFK",//
    },
        aeropuerto1:{
                "codigo": "EZE",//
    }
    }
    async function main() {
        try {
            generarFacturaCancelada(nombreArchivo, rutaArchivo, objeto) 
        }
        catch (err) {
            console.log('Error ' + err)
        }

    }
    main()
}


module.exports = { factoryBilleteVuelo }
module.exports = { factoryFactura }
module.exports = { factoryFacturaCancelada }


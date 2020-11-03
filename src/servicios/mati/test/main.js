//const { billeteVuelo } = require("./appBilleteVuelo");
//const { factura } = require("./appFacturaVuelo");
const { facturaCancelada } = require("./appFacturaCancelacionVuelo");

const objeto = {
    avion:{ "modeloAvión": "BOEING 737 JET",
            "numeroAvion": "5312563643",   
            "capacidad":  "132"
    },
    reserva:{ "id" : "49284934",
              "vuelo" : "2938",
              "destino" : "NYC New York, United States",
              "origen" : "EZE Buenos Aires, Argentina",
              "cantAsientos" : "1",
              "nroAsiento" : "40H",
              "clase" : "economica"
    },
    pasajero:{ "nombre": "Pepe Carlos",
               "apellido" : "Argento", 
               "dni": "20724829", 
               "email" : "pepeargento@gmail.com"
},
     vuelo:{
            "precio":"$120.382,00", 
            "duracion":"11:00",
            "partida":"JUEVES 04 SEPTIEMBRE",
            "arribo" : "VIERNES 05 SEPTIEMBRE",
            "horaPartida" : "12:50 PM",
            "horaArribo" : "4:15 AM",
            "millaje" : "8.720 km"
},
    destino:{"nombre":"Nueva York, United States", 
            "aeropuerto": "JFK",
            "terminal" : "3"
},
    origen:{"nombre":"Buenos Aires, Argentina", 
             "aeropuerto": "EZE",
             "terminal" : "C"
}}

//nombreArchivo = `pdfTestBillete`;
//nombreArchivo = `pdfTestFactura`;
nombreArchivo = `pdfTestFacturaCancelada`;
rutaArchivo = `src/servicios/mati/pdfs/`;

async function main() {
    try {
        //billeteVuelo(nombreArchivo, rutaArchivo, objeto) 
        // factura(nombreArchivo, rutaArchivo, objeto) 
        facturaCancelada(nombreArchivo, rutaArchivo, objeto) 
        
    }
    catch (err) {
        console.log('Error en la creacion de PDF')
    } finally {

        console.log('Fin del modulo PDF')

    }

}
main()
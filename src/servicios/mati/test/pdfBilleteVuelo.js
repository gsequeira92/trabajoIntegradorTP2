const datos = require('./datosParaPdf')
const objeto = datos.contenido()

module.exports = {
    content: [
        {
            text: 'Aerolienas Marian',
            style: 'header',
            alignment: 'center'
        },
        {
            text: '\n\Billete de Vuelo.\n\n',
            style: 'subheader'
        },
        {
            text: `Estimado senior ${objeto.pasajero.apellido}, le enviamos el billete virtual por la compra de su vuelo.\n`,
            style: "label"
        },
        'Adjuntamos los detalles\n\n',
        {
            image: 'src/servicios/mati/img/logo-avion.png',
            width: 40,
            height: 30,
        },
        {
            text: `-> Partida: ${objeto.vuelo.partida}  -> Arribo: ${objeto.vuelo.arribo}\n`,
            style: "label"
        },
        {
            text: 'Por favor verifique el horario del vuelo antes de la salida\n\n',
            style: "pequeniolabel"
        },
        {
            text: `AEROLINEAS MARIAN C.A. S.P.A.\n NRO VUELO: ${objeto.reserva.vuelo}\n DURACION: ${objeto.vuelo.duracion}hrs\n`,
            style: "label"
        },
        "\n\n",
        {
            style: 'Tabla',
            table: {
                body: [
                    [`Sale a la(s) ${objeto.vuelo.horaPartida}`, `Llega a la(s) ${objeto.vuelo.horaArribo}`, `AVION ${objeto.avion.modeloAvión}`],
                    [`${objeto.origen.aeropuerto} ${objeto.origen.nombre}`, `${objeto.destino.aeropuerto} ${objeto.destino.nombre}`, `Millaje: ${objeto.vuelo.millaje}` ],
                    [`Terminal: ${objeto.origen.terminal}`, `Terminal: ${objeto.destino.terminal}`, '' ]
                ]
            }
        },
        "\n\n",
        {
            text: `Nombre del pasajero: ${objeto.pasajero.apellido}/ ${objeto.pasajero.nombre}\n DNI: ${objeto.pasajero.dni}\n`,
            style: "label"
        },
        "\n\n",
        {
            style: 'Tabla',
            table: {
                body: [
                    [`Asiento(s): ${objeto.reserva.nroAsiento} `, `Clase: ${objeto.reserva.clase}`, `Id Reserva: ${objeto.reserva.id}`]
                ]
            }
        },
        "\n\n",
        {
            image: 'src/servicios/mati/img/avion.jpg',
            width: 150,
            alignment: 'center'
        },
        {
            text: ' Contacto Aerolienas Marian\n aerolienas@marian.com / 4412-4829',
            style: 'label',
            alignment: 'center'
        },
    
    
    ]
};
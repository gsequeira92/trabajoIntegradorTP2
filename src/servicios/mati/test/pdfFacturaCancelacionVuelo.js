const crearContenidoFacturaCancelada = (objeto) => {
    return {
    content: [
        {
			text: 'Aerolienas Marian',
			style: 'header',
			alignment: 'center'
        },
        {
			text: '\n\Factura de Cancelacion de Vuelo.\n\n',
			style: 'subheader'
        },
        {
            text: `Estimado senior ${objeto.pasajero.apellido}, le enviamos la factura de cancelacion de su vuelo.\n`,
            style: "label"
        },
        'Adjuntamos los detalles\n\n',
        {
            image: 'src/servicios/mati/img/logo-factura.png',
			width: 40,
			height: 30,
		},
        {text: '\nAerolineas Marian S.A.', style: 'header'},
        '\n\n',
		{
			columns: [
				{
					ul: [
						`Nombre y apellido: ${objeto.pasajero.nombre} ${objeto.pasajero.apellido}`,
						`DNI: ${objeto.pasajero.dni}`,
					]
				},
				{
					ul: [
						`Email: ${objeto.pasajero.email}`,
						`ID Reserva: ${objeto.reserva.id}`,
					]
				}
			]
		},
        {
            text: 'Factura Tipo A Reembolso\n\n',
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
					['Descripcion','Cantidad Asientos', 'Precio'],
                    [`Vuelo Aerolineas Marian ${objeto.origen.aeropuerto}-${objeto.destino.aeropuerto}`, `${objeto.reserva.cantAsientos}`, `${objeto.vuelo.precio}` ]
				]
			}
        },
        "\n\n",
        {
            text: `Nro Avion: ${objeto.avion.numeroAvion}\n Modelo: ${objeto.avion.modeloAvión}\n`,
            style: "label"
        },
        "\n\n",
        {
			style: 'Tabla',
			table: {
				body: [
                    [`Asiento(s): ${objeto.reserva.nroAsiento} `, `Clase: ${objeto.reserva.clase}`, `Id Reserva: ${objeto.reserva.id}`],
                    [`Origen: ${objeto.origen.nombre}`, `Destino: ${objeto.origen.nombre}`, 'Estado de vuelo: CONFIRMADO']
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
}
}


module.exports = {
    crearContenidoFacturaCancelada
};
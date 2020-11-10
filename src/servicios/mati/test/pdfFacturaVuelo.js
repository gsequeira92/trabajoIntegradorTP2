const crearContenidoPdfBillete = (objeto) => {
    return {
    content: [
        {
			text: 'Aerolienas Marian',
			style: 'header',
			alignment: 'center'
        },
        {
			text: '\n\Factura de Vuelo.\n\n',
			style: 'subheader'
        },
        {
            text: `Estimado senior ${objeto.pasajero.apellido}, le enviamos la factura por la compra de su vuelo.\n`,
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
						`ID Reserva: ${objeto.reserva.idReserva}`,
					]
				}
			]
		},
        {
            text: 'Factura Tipo A\n\n',
            style: "pequeniolabel"
        },
        {
            text: `AEROLINEAS MARIAN C.A. S.P.A.\n NRO VUELO: ${objeto.reserva.idVuelo}\n DURACION: ${objeto.vuelo.duracion}hrs\n`,
            style: "label"
        },
        "\n\n",
        {
			style: 'Tabla',
			table: {
				body: [
					['Descripcion','Cantidad Asientos', 'Precio'],
                    [`Vuelo Aerolineas Marian ${objeto.aeropuerto1.codigo}-${objeto.aeropuerto2.codigo}`, `1`, '$'`${objeto.vuelo.precio}` ]
				]
			}
        },
        "\n\n",
        {
            text: `Nro Avion: ${objeto.avion.numeroAvion}\n Modelo: ${objeto.avion.modeloAvion}\n`,
            style: "label"
        },
        "\n\n",
        {
			style: 'Tabla',
			table: {
				body: [
                    [`Asiento(s): ${objeto.reserva.asiento} `, `Clase: Economica`, `Id Reserva: ${objeto.reserva.idReserva}`],
                    [`Origen: ${objeto.reserva.origen}`, `Destino: ${objeto.reserva.destino}`, 'Estado de vuelo: CONFIRMADO']
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
    crearContenidoPdfBillete
};
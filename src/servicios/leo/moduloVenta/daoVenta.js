function crearDb() {

    const clienteNuevo = {
        nombre: 'Grace ',
        apellido: 'Hopper',
        edad: '86',
        dni: '123',
        mail :"tu.ombligo@hotmail.com"
    }
    const vuelo = {
        destino: 'Buenos Aires',
        origen: 'Peru',
        asientos_totales: '12',
        asientos_vendidos: ['10A','11B'],
        asientos_disponibles: ['47G','65F'],
        vuelo_id: '28'
    }
    const venta = {
        reserva_id: '080',
        cliente_dni: '123',
        vuelo_id: '28',
        asiento: '43H'

    }


    const clientes = []
    cliente.push(clienteNuevo);

    const vuelos = []
    vuelos.push(vuelo)

    const ventas = []
    ventas.push(venta)




    const db = {
        /* getAll: async () => {
             return elementos
         },*/

        getClienteByDni: async (dni) => {
            return clientes.filter(e => e.dni === dni)
        },
        getVentaById: async (id) => {
            return ventas.filter(e => e.id === id)
        },
        getVueloById: async (id) => {
            return vuelo.filter(e => e.id === id)
        },

        addReserva: async (reserva) => {
            ventas.push(reserva)
        },
        addCliente: async (cliente) => {
            clientes.push(cliente)
        },
        addVuelo: async (vuelo) => {
            vuelos.push(vuelo)
        },
        getPasajeLibre: async (idVuelo) => {
            const v = await getVueloById(idVuelo);
            const asiento = vuelo.asientos_disponibles.pop()
            vuelo.asientos_vendidos.push(asiento)
            return asiento
        }

   
        
        /*
       addUnique: async (elemento, campo) => {
           const encontrado = elementos.find(e => e[campo] === elemento[campo])
           if (encontrado) {
               throw crearErrorDelCliente('ya existe con ese dni')
           }
           elementos.push(elemento)
       },
       deleteAll: async () => {
           while (elementos.length > 0) elementos.pop()
       },
       connect: async () => { },
       close: async () => { }
       */

    }
    return db
}
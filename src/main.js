const { createServer } = require('./compartido/servidor/Server.js')
const { crearReservasDaoDb } = require('../src/Db/ReservaDb')
const { crearVueloDaoDb } = require('../src/Db/VueloDb')
const { crearPasajeroDaoDb } = require('../src/Db/PasajeroDb')
const { crearAerolineaApi } = require('../src/apis/AerolineaApi')
const config = require('../src/config/config.js')

let daoReservas
let daoPasajeros
let daoVuelos
let server

async function main() {
    try {
        daoReservas = await crearReservasDaoDb()
        daoPasajeros = await crearPasajeroDaoDb()
        daoVuelos = await crearVueloDaoDb()
        console.log(`base de datos conectada`)
        //Nuestra api usa los factories con las db ya conectadas, como usarlas aca?
        //Habria que modificar los parametros de aerolineas api `._|00|_.´ 

        aplicacion = crearAerolineaApi()

        server = await createServer({ aplicacion, port: config.getServerPort() })
        console.log(`servidor conectado en puerto: ${server.port}`)
    } catch (e) {
        console.log(e.message)
    }
}

process.on('SIGINT', async () => {
    try {
        if (server) {
            server.close()
            console.log('servidor cerrado con exito')
        }
        if (daoEstudiantes) {
            await daoEstudiantes.close()
            console.log('base de datos desconectada con exito')
        }
    } catch (error) {
        console.err(error)
    } finally {
        process.exit(0)
    }
})

main()
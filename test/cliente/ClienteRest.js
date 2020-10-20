const axios = require('axios').default

async function sendRequest(req) {
    try {
        const result = await axios(req)
        return result
    } catch (error) {
        if (error.response) {
            const NE = new Error(`error ${error.response.status} enviado desde el servidor: ${error.response.data.message}`)
            NE.status = error.response.status
            NE.message = error.response.data.message
            throw NE
        } else {
            throw new Error('error al enviar la peticion')
        }
    }
}

function makeUrl(port) {
    return `http://localhost:${port}/api/estudiantes`
}

function crearClienteRest(port) {

    return {
        getAll: async () => {
            return await sendRequest({ url: makeUrl(port) })
        },
        getByDni: async (unDni) => {
            return await sendRequest({ url: makeUrl(port), params: { dni: unDni } })
        },
        post: async (estudiante) => {
            return await sendRequest({ url: makeUrl(port), method: 'post', data: estudiante })
        },
        put: async (estudiante) => {
            return await sendRequest({ url: makeUrl(port) + `/${estudiante.id}`, method: 'put', data: estudiante })
        },
        getByAge: async ({ desde, hasta }) => {
            return await sendRequest({ url: makeUrl(port), params: { desde, hasta } })
        },
        deleteById: async (unId) => {
            return await sendRequest({ url: makeUrl(port) + `/${unId}`, method: 'delete' })
        }
    }
}

module.exports = { crearClienteRest }
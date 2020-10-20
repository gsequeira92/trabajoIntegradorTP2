const assert = require('assert')
const { crearEstudiante } = require('../../../src/estudiantes/modelos/Estudiante.js')

const datosValidos = {
    id: 999,
    nombre: 'valido',
    apellido: 'valido',
    edad: 50,
    dni: '666'
}

describe('estudiante', () => {
    describe('si no tiene nombre', () => {
        it('lanza error', () => {
            const datos = { ...datosValidos }
            delete datos.nombre
            assert.throws(() => {
                crearEstudiante(datos)
            })
        })
    })

    describe('si no tiene apellido', () => {
        it('lanza error', () => {
            const datos = { ...datosValidos }
            delete datos.apellido
            assert.throws(() => {
                crearEstudiante(datos)
            })
        })
    })

    describe('si no tiene edad', () => {
        it('lanza error', () => {
            const datos = { ...datosValidos }
            delete datos.edad
            assert.throws(() => {
                crearEstudiante(datos)
            })
        })
    })

    describe('si la edad no es un numero', () => {
        it('lanza error', () => {
            const datos = { ...datosValidos }
            datos.edad = 'abc'
            assert.throws(() => {
                crearEstudiante(datos)
            })
        })
    })

    describe('si no tiene dni', () => {
        it('lanza error', () => {
            const datos = { ...datosValidos }
            delete datos.dni
            assert.throws(() => {
                crearEstudiante(datos)
            })
        })
    })

    describe('si el dni no es un numero', () => {
        it('lanza error', () => {
            const datos = { ...datosValidos }
            datos.dni = 'abc'
            assert.throws(() => {
                crearEstudiante(datos)
            })
        })
    })

    describe('si los datos no incluyen id', () => {
        it('se lo agrega', () => {
            const datos = { ...datosValidos }
            delete datos.id
            const creado = crearEstudiante(datos)
            assert(creado.id)
        })
    })

    describe('si los datos incluyen id', () => {
        it('mantiene el mismo id', () => {
            const datos = { ...datosValidos }
            const creado = crearEstudiante(datos)
            assert. strictEqual(creado.id, datos.id)
        })
    })
})
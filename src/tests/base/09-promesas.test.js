import { getHeroeByIdAsync } from '../../base/09-promesas'
import '@testing-library/jest-dom'
import { heroes } from '../../data/heroes'

describe('Pruebas con promesas', () => {
    test('Debe de retornar un Heroe Async', (done) => {
        const id = 1
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0])
                done()
            })
    })

    test('Debe de retornar un error si el heroe por id no existe', (done) => {
        const id = 10

        getHeroeByIdAsync(id)
            .then((res) => {

            })
            .catch((err) => {
                expect(err).toBe('No se pudo encontrar el héroe')
                done()

            })
    })

})
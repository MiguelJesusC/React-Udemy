import {getUser, getUsuarioActivo} from '../../base/05-funciones'
import '@testing-library/jest-dom'

describe ( 'Pruebas en 05-funciones', () =>{

        test (' getUser debe de retornar un objeto', () =>{

            const userTest = {
                uid:'ABC123',
                username: 'El_Papi1502'
            }
            const user = getUser()
            expect( user ).toEqual(userTest)
        })

        test ('getUsuarioActivo deberia retonar un objeto', () =>{

            const userTest2 = {
                uid:'ABC567',
                username: 'Lou'
            }
            const usuarioActivo = getUsuarioActivo(userTest2.username)

            expect(usuarioActivo).toEqual(userTest2)
        })
})
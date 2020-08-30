import {retornaArreglo} from '../../base/07-deses-arr'
import '@testing-library/jest-dom'

describe ('Pruebas en desestructuracion', ()=>{
    test( 'Debe retornar un string y un numero', () => {

        const [letras, numeros ] = retornaArreglo();

        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')
    })
})
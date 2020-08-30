import {getSaludo} from '../../base/02-template-string'
import { ExpansionPanelActions } from '@material-ui/core'

describe ( '02-template-string.test.js', () =>{
    
    test ( `getSaludo() debe retornar Hola Lou`, () =>{

        const nombre = 'Lou'
        const saludo = getSaludo( nombre )
        expect(saludo).toBe('Hola ' + nombre)
    })

    test ( `getSaludo() debe retornar el valor por defecto`, () => {
        
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Carlos')
    })
})

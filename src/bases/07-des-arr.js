const personajes = ['Goku', 'Vegeta', 'Trunks']

const [, , p3]  = personajes;

console.log(p3)

const retonarArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = (retonarArreglo())
console.log(letras, numeros)

const useState = (nombre) =>{
    return [nombre, () => {
        console.log('Hola Mundo')
    }]
}

const [nombre, setNombre] = useState('Miguel Jesus')

console.log(nombre)
setNombre()
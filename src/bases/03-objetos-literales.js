const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direcccion:{
        ciudad: 'New York',
        zip: 55232323,
        lat: 14.3232,
        lng: 34.3432423
     }
};

console.log(persona)

const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona2)



//Utilizar esas funciones como constantes. 
const saludar = function (nombre){
    return `Hola, ${nombre}`
}
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
} 
const saludar3 = (nombre) => `Hola, ${nombre}` 

const getUser = () => ({
    uuid: '231029',
    username: 'ElPapi_1501'
})

const getUsuarioActivo = (nombre) => ({
    uuid:'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Lou_')
console.log(usuarioActivo)
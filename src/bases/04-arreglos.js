const arreglo = [1,2,3,4]

let arreglo2 = [...arreglo]

arreglo2.push(5)
console.log(arreglo)
console.log(arreglo2)

const arreglo3 = arreglo2.map( x =>(x *2))

console.log(arreglo3)
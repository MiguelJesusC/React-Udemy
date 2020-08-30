import {getHeroById} from './bases/08-export-find-filter'

// const promesa =  new Promise((res, rej) =>{
//     setTimeout(() => {
//         const heroeById = getHeroById(2) 
//         res(heroeById)
//         //rej('Miguel algun dia papu, seras duro programando')
//     }, 2000);
// })

// promesa.then((heroeById) => {
//     console.log(heroeById)
// }).catch((err) =>{
//     console.log(err)
// })

const getHeroeByIdAsync = (id) =>{
    return new Promise((res, rej) =>{
        setTimeout(() => {
            const heroeById = getHeroById(id) 
           if(heroeById){
                res(heroeById)
           }else{
             rej(`No se pudo encontrar el heroe`)
           }
        }, 2000);
    })    
}

getHeroeByIdAsync(2).then(console.log)
.catch((err) =>{
    console.log(err)
})

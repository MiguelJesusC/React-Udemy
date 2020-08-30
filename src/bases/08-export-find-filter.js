import {heroes} from '../data/heroes'

export const getHeroById = (id)=>{
    return heroes.find((element) => element.id === id)
}

export const getHeroeByOwner = (owner) =>{
    return heroes.filter((element) => element.owner === owner)
}
// console.log(getHeroById(2))
// console.log(getHeroeByOwner('DC'))
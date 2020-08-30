import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp'
import {heroes} from '../../data/heroes'
import '@testing-library/jest-dom'

describe ('Funciones filter , find', () =>{
    test ('Retorna un heroe', () => {
        const id = 4
        const getHeroeByIds = getHeroeById(id)
        const heroeData = heroes.find( h => h.id === id)
        expect (getHeroeByIds).toEqual(heroeData)
        
    })

    test('Retornara undefined sino consigue el heroe',() => {
        const id = 10
        const heroe = getHeroeById(id)
        expect (heroe).toBe(undefined)
    })

    test('Debe retornar el arreglo de los heroes de DC', () =>{
        const owner = 'DC'
        const ownerHero = getHeroesByOwner(owner)
        const ownerHeroFilter = heroes.filter( o => o.owner === owner)
        expect(ownerHero).toStrictEqual(ownerHeroFilter)
    })

    test('Debe retornar el arreglo de los heroes de Marvel', () =>{
        const owner = 'Marvel'
        // const ownerHero = getHeroesByOwner(owner)
        const ownerHeroFilter = heroes.filter( o => o.owner === owner)
        expect (ownerHeroFilter.length).toBe(2)
    })
})
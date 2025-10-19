import { heroes, Owner, type Hero } from "../data/heroes.data"


const getHeroById = ( id: number ) : Hero => {

    const hero = heroes.find( hero => { return hero.id === id});

    if ( !hero ) throw new Error(`The hero whit the id: ${ id } doesn't exist`)

    return hero;
}


const hero1 = getHeroById(1);

console.log(hero1)


export const getHeroesByOwner = ( owner: Owner) => {
    const HeroesByOwner = heroes.filter( hero => { return hero.owner === owner});
    
    return HeroesByOwner;
}




interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const person = {
    name : 'Andres',
    age: 24,
    key: 'andres_nunez_01',
    rank: 'Programmer'
}


const useContext = ( { name, key, age, rank }: Hero) => {



    return {
        keyName: key,
        user: {
            name: name,
            age,
        },
        rank: rank
    }
}

const context = useContext(person);

console.log(context)



const { rank, keyName, user: { name, age },  } = structuredClone(useContext(person));


console.log(rank, keyName);

console.log(name, age)
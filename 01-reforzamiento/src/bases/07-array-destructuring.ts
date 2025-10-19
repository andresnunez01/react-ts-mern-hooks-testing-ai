


const characterNames = ['Anakin', 'DarthVader', 'Ahsoka'];

const [, , ahsoka] = characterNames;

console.log( ahsoka );


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}


const [ letters, numbers ] = returnsArrayFn();

console.log( numbers + 100 );

console.log( letters + 100 );




const useState = (name:string) => {
    return [ name, (newName:string)=>{console.log(newName)} ] as const;
}

let [ name, setName ] = useState('Goku');

console.log(name);

setName('Ahsoka')
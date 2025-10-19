import type { CSSProperties } from "react";

interface Props {
    firstName: string;
    lastName: string
}

const favoriteGames = ['Hollow Knight', 'Silksong', 'RDR2', 'Bioshock'];
const isActive = false;
const address = {
    zipCode: '232323',
    country: 'Mexico',
}


const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 30,
}

export const MyAwesomeApp = ( { firstName, lastName }: Props ) => {

    return <>
        <h1> Firstname: { firstName }</h1>
        <h3> Lastname: { lastName }</h3>

        <p>{ favoriteGames.join(', ') }</p>

        <h1>{ isActive ? 'Activo' : 'No activo' }</h1>

        <p
        style={ myStyles }
        >{ JSON.stringify(address) }</p>
    </>

}


// export function MyAwesomeApp ( { firstname, lastname }: Props ) {

//     return <>
//         <h1> Firstname: { firstname }</h1>
//         <h3> Lastname: { lastname }</h3>
//     </>

// }
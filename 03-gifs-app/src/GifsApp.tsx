
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"
import { useState } from "react"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import { type Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const [currentGifs, setCurrentGifs] = useState<Gif[]>([]);

    const handleTermClicked = (term:string) => {
        console.log(term)
    }

    const handleSearch = async ( query: string ) => {
        if( !query ) return

        query = query.toLowerCase().trim()

        if( previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0,7));

        const gifs = await getGifsByQuery(query);

        setCurrentGifs(gifs)

        console.log({gifs})
    }


  return (
    <>
        {/* Header */}
        <CustomHeader title="Buscador de Gifs" description="Encuentra el Gif perfecto"/>

        {/* SearchBar */}
        <SearchBar placeholder="Busca tu gif" onQuery={ handleSearch }/>

        {/* Busquedas Previas */}
        <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

        {/* Gifs */}

        <GifList gifs={currentGifs}/>
    </>
  )
}

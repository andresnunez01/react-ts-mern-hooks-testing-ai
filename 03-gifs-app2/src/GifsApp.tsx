
import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs";



export const GifsApp = () => {
  
  const {handleSearch, handleTermClicked, gifs, prevTerms} = useGifs();

  return (
    <>

      {/* Header */}
      <CustomHeader title={"GifsApp"} description={"Descubre y comparte el gif perfecto"}/>

      {/* Search */}

      <SearchBar placeholder="Inserta tu busqueda" onQuery={handleSearch}/>

      {/* Busquedas Previas */}

      <PreviousSearches prevSearches={prevTerms} onLabelClicked={handleTermClicked}/>

      {/* Gifs */}

      <GifsList gifs={gifs} />

    
    </>
  )
}

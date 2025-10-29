import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
    const [ gifs, setGifs ] = useState <Gif[]> ([]);
    const [ prevTerms, setPrevTerms ] = useState <string[]> ([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});


    const handleTermClicked = async (term: string) => {

        

        if( !gifsCache.current[term]){
            const gifs = await getGifsByQuery(term);
            setGifs(gifs);
            return;
        }

        setGifs(gifsCache.current[term])

        
    }

    const handleSearch = async(query:string) => {

        query = query.trim().toLowerCase();
        
        if (!query) return;
        if (prevTerms.includes(query)) return;

        setPrevTerms([query, ...prevTerms].slice(0,8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache.current[query] = gifs;

        console.log(gifsCache)
    }



  return {

    //Props
    gifs,
    prevTerms,

    //Methods
    handleSearch,
    handleTermClicked,
    
  }
}

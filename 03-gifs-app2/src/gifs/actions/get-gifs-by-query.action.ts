
import { type GiphyResponse } from '../interfaces/giphy.response'
import type { Gif } from '../interfaces/gif.interface'
import { giphyApi } from '../api/giphy.api'

export const getGifsByQuery = async ( query: string): Promise<Gif[]> => {
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=pTO8yRWWuFUR1bTI9E2u9Pk7CAIwMMid&q=${query}&limit=10&lang=es`)

    if ( !query.trim() ){
        return []
    }
    
    try {
        const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 10,
        }
    })
    
    return response.data.data.map( (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),

    }))
    } catch (error) {
        console.error(error);
        return []
    }

}
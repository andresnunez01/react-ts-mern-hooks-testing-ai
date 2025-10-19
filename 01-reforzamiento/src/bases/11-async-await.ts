import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'IW3eOGy0R2KEKEShBL4fvr5mIxUEDjn9&tag=&rating=g';


const createImageInsideDOM = ( imageUrl: string ) => {

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement)

}

const getRandomGifUrl = async () => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const { data } = (await response.json()) as GiphyRandomResponse;

    return data.images.original.url;

}

getRandomGifUrl().then( createImageInsideDOM )

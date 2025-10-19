import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'IW3eOGy0R2KEKEShBL4fvr5mIxUEDjn9&tag=&rating=g';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = ( imageUrl: string ) => {

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement)

}

myRequest
.then( (response) => response.json() )
.then( ({ data }: GiphyRandomResponse) => {

    const imageUrl = data.images.original.url;
    createImageInsideDOM( imageUrl );
    
})
.catch((err) => {
    console.error(err)
});
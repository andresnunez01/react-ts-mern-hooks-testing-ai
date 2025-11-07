import { beforeEach, describe, expect, test, vi } from "vitest"
import { getGifsByQuery } from "./get-gifs-by-query.action"

import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "./giphy.response.data";


describe('getGifsByQuery', ()=> {

    let mock = new AxiosMockAdapter(giphyApi);


    beforeEach(() => {
        // mock.reset();
        mock = new AxiosMockAdapter(giphyApi)
    })
    // test('should return a list of gifs', async() => {
    //     const gifs = await getGifsByQuery('max verstapen');
    //     const [gif1] = gifs;

    //     expect(gifs.length).toBe(10)

    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //     })
    // })


    test('should return a list of gifs', async () => {

        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('anakin skywalker');

        expect(gifs.length).toBe(10);

        gifs.forEach( (gif) => {
            expect( typeof gif.id ).toBe('string');
            expect( typeof gif.title ).toBe('string');
            expect( typeof gif.url ).toBe('string');
            expect( typeof gif.width ).toBe('number');
            expect( typeof gif.height ).toBe('number');
        })
    })


    test('should return a empty list of gifs if query is empty', async () => {

        // mock.onGet('/search').reply(200, {data: []});
        mock.restore();

        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);
    })

    test('should handle error when the API returns an error', async () => {


        const consoleErrorSpy = vi.spyOn(console,'error').mockImplementation( () => {})
        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad request'
            }
        })


        const gifs = await getGifsByQuery('anakin skywalker')

        expect(gifs.length).toBe(0)
        expect(consoleErrorSpy).toHaveBeenCalled()
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
        expect(consoleErrorSpy).toHaveBeenCalledWith( expect.anything() )
    })
})
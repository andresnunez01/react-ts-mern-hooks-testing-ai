import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";


describe('useGifs',() => {

  test('should return default values and methods',() =>  {
      const { result } = renderHook(() => useGifs());
      expect( result.current.gifs ).toStrictEqual([]);
      expect( result.current.prevTerms ).toStrictEqual([]);
      expect(result.current.handleTermClicked).toBeDefined();
      expect(result.current.handleSearch).toBeDefined();

  })

  test('should return a list of gifs when handleSearch is called', async () =>  {
    //handleSearch 
    const { result } = renderHook(() => useGifs());

    await act(async ()=> {
      await result.current.handleSearch('anakin');
    })

    console.log(result.current.gifs)

    expect(result.current.gifs.length).toBe(10)
  })


  test('should return a list of gifs when handleTermClicked is called', async () =>  {
    //handleTermClciked
    
    const { result } = renderHook( () => useGifs() );

    await act( async () => {
      await result.current.handleTermClicked('anakin');
    });

    expect(result.current.gifs.length).toBe(10);
    
  })


  test('should return a list from cache', async () =>  {

    const { result } = renderHook( () => useGifs() );

    await act( async () => {
      await result.current.handleTermClicked('anakin');
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(new Error('This is my custom error'))

    await act( async () => {
      await result.current.handleTermClicked('anakin');
    });
    
    expect(result.current.gifs.length).toBe(10);

  })


  test('should return no more than 8 previous terms', async() => {

    const { result } = renderHook( () => useGifs() );

    vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([])

    await act ( async () => {
      await result.current.handleSearch('goku1')
    })
    await act ( async () => {
      await result.current.handleSearch('goku2')
    })
    await act ( async () => {
      await result.current.handleSearch('goku3')
    })
    await act ( async () => {
      await result.current.handleSearch('goku4')
    })
    await act ( async () => {
      await result.current.handleSearch('goku5')
    })
    await act ( async () => {
      await result.current.handleSearch('goku6')
    })
    await act ( async () => {
      await result.current.handleSearch('goku7')
    })
    await act ( async () => {
      await result.current.handleSearch('goku8')
    })
    await act ( async () => {
      await result.current.handleSearch('goku9')
    })
    await act ( async () => {
      await result.current.handleSearch('goku10')
    })

    console.log(result.current.prevTerms)
    expect(result.current.prevTerms.length).toBe(8)
    expect(result.current.prevTerms).toStrictEqual([
      'goku10', 'goku9',
      'goku8',  'goku7',
      'goku6',  'goku5',
      'goku4',  'goku3'
    ])

  })
})
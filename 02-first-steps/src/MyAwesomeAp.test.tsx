import { describe, expect, test } from "vitest"
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp"

describe('MyAwesomwApp', () => {
    test('should render firstName and lastName - container', () => {

        const { container } = render(<MyAwesomeApp firstName='Andres' lastName='Nunez'></MyAwesomeApp>)
        //screen.debug();
        // console.log( container.innerHTML )


        console.log('\n\n\n\nimpresion h1')
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');


        expect(h1?.innerHTML).toBe('Andres');
        expect(h3?.innerHTML).toContain('Nunez');


    });

    test('should render firstName and lastName - screen', () => {

        // const { container } = render(<MyAwesomeApp firstName='Andres' lastName='Nunez'></MyAwesomeApp>)
        render(<MyAwesomeApp firstName='Andres' lastName='Nunez'/>)
        //screen.debug();


        
        // const h1 = screen.getByRole('heading', {
        //     level: 1,
        // });
        const h1 = screen.getByTestId('first-name-title')

        expect(h1.innerHTML).toContain('Andres')



    });

    test('should match snapshot - container', () => {
        const { container } = render(<MyAwesomeApp firstName="Andres" lastName="Nunez"/>);

        expect(container).toMatchSnapshot();
    })

    test('should match snapshot - screen', () => {
        render(<MyAwesomeApp firstName="Andres" lastName="Nunez"/>);

        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })
})


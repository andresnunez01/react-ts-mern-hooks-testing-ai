import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";



describe('ItemCounter', () => {
    
    test('should render with default values', () => {

        const itemName = 'Test Item';

        render(<ItemCounter name={itemName}/>);

        expect(screen.getByText(itemName)).toBeDefined();

    });

    test('should render with custom quantity', () => {

        const itemName = 'Test Item';
        const quantity = 10;

        render(<ItemCounter name={itemName} quantity={quantity}/>);
        
        expect(screen.getByText(quantity)).toBeDefined();

    });

    test('should increase +1 when button is pressed', () => {

        const itemName = 'Test Item';
        const quantity = 10;

        render(<ItemCounter name={itemName} quantity={quantity}/>);

        const [ buttonAdd ] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText(11))

    });

    test('should decrease -1 when button is pressed', () => {

        const itemName = 'Test Item';
        const quantity = 5;

        render(<ItemCounter name={itemName} quantity={quantity}/>)

        const [ , subtractButton ] = screen.getAllByRole('button');

        fireEvent.click(subtractButton);
        expect(screen.getByText(4)).toBeDefined();

    });

    test('should not dicrease count when -1 is pressed and quantity is 1', () => {

        const itemName = 'Test Item';
        const quantity = 1;

        render(<ItemCounter name={itemName} quantity={quantity}/>)

        const [ , subtractButton ] = screen.getAllByRole('button');

        fireEvent.click(subtractButton);
        expect(screen.getByText(1)).toBeDefined();

    });

    test('should change to read when count equal to 1', () => {
        const itemName = 'Test Item';
        const quantity = 1;

        render(<ItemCounter name={itemName} quantity={quantity}/>);

        const itemText = screen.getByText(itemName);

        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count greater than 1', () => {
        const itemName = 'Test Item';
        const quantity = 2;

        render(<ItemCounter name={itemName} quantity={quantity}/>);

        const itemText = screen.getByText(itemName);

        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('black');
    });
})
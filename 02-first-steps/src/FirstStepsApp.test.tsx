import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((_props: unknown) => {
    return (<div data-testid="itemCounter"/>)
})
    
vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter', ()=>({
//     ItemCounter: (props: unknown) => <div data-testid="itemCounter" name={props.name} quantity={props.quantity}/>
// }));

describe('FirstStepsApp', () => {
    beforeEach(()=>{
        vi.clearAllMocks();
    })
    test('should match snapshot', () => {

        render(<FirstStepsApp/>)

        expect(screen.getByTestId('FSA-div')).toMatchSnapshot();

        //screen.debug();
    });

    test('should render the correct number of itemCounter components', () => {
        render(<FirstStepsApp/>);

        //screen.debug();

        const itemCounters = screen.getAllByTestId('itemCounter');

        expect(itemCounters.length).toBe(3);

    })

    test('should render itemCounter with correct props', () => {
        render(<FirstStepsApp/>)

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Xbox Series X', quantity: 1});
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Control Xbox Series', quantity: 2});
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Hollow Knight: Silksong', quantity: 5});

    })
})
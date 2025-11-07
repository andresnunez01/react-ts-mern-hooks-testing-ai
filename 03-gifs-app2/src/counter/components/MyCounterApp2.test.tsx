import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  useCounter: ()=> ({ // se simula la funcion de llamada del hook
    // se simulan los return de la funcion y el tipo o valor que deberian de regresar
    counter: 20, 
    handleAdd: handleAddMock, 
    handleSubtract: handleSubtractMock, 
    handleReset: handleResetMock,  
  })
}))

describe('MyCounterApp', () => {


  test('should render the component', () => {
    render(<MyCounterApp/>)

    screen.debug()

    expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain(
      `counter: 20`
    )

    expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
    expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
    expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
  });

  test('should call handle if button is clicked', () => {
    render(<MyCounterApp/>)

    const button = screen.getByRole('button', {name: '+1'})

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleSubtractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  })

})
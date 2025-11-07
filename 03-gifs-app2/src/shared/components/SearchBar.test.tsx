import { describe, expect, test, vi } from "vitest";
import { SearchBar } from './SearchBar';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";



describe('SearchBar', () => {
    test('should should render searchBar correctly', () => {
        const { container } = render(<SearchBar onQuery={() => {}}/>)

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onQuery with the correct value after 1000ms', async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    // await new Promise((resolve) => setTimeout(resolve, 701));
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith('test');
    }, { timeout: 3000 });
  });

    test('should call only once with the last value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
        }, { timeout: 3000 });
    });

    test('should call onQuery button clicked with the input value', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');

    })

    test('should the input has the correct placeholder value', () => {

      render(<SearchBar onQuery={() => {}} placeholder="Buscar Gif" />)

      const inputPlaceholder = screen.getByPlaceholderText('Buscar Gif');

      expect(inputPlaceholder).toBeDefined()
    })

})
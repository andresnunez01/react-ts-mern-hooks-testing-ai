import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {

    test( 'should add two positive numbers', () => {

        //! 1. Arrange
        const a = 1;
        const b = 2;
        //! 2. Act
        const result = add(a,b);
        //! 3. Assert
        expect(result).toBe(a + b)
    })

    test( 'should add two positive numbers', () => {

        //! 1. Arrange
        const a = 45;
        const b = 26;
        //! 2. Act
        const result = add(a,b);
        //! 3. Assert
        expect(result).toBe(a + b)
    });

    test( 'should add two positive numbers', () => {

        //! 1. Arrange
        const a = 8;
        const b = 2;
        //! 2. Act
        const result = add(a,b);
        //! 3. Assert
        expect(result).toBe(a + b)
    })

})

describe('subtract', () => {

    test('should subtract two positive numbers', () => {
        //! 1. Arrange
        const a = 8;
        const b = 2;
        //! 2. Act
        const result = subtract(a,b);
        //! 3. Assert
        expect(result).toBe(a - b)
    })

    test('should subtract one positive and one negative numbers', () => {
        //! 1. Arrange
        const a = 8;
        const b = -2;
        //! 2. Act
        const result = subtract(a,b);
        //! 3. Assert
        expect(result).toBe(a - b)
    })
});

describe('multiply', () => {

    test('should multiply two positive numbers', () => {
        //! 1. Arrange
        const a = 8;
        const b = 2;
        //! 2. Act
        const result = multiply(a,b);
        //! 3. Assert
        expect(result).toBe(a * b)
    })

    test('should tmultiply per 0', () => {
        //! 1. Arrange
        const a = 8;
        const b = 0;
        //! 2. Act
        const result = multiply(a,b);
        //! 3. Assert
        expect(result).toBe(a * b)
    })
});


describe('divide', () => {

    test('should divide two positive numbers', () => {
        //! 1. Arrange
        const a = 8;
        const b = 2;
        //! 2. Act
        const result = divide(a,b);
        //! 3. Assert
        expect(result).toBe(a / b)
    })
});

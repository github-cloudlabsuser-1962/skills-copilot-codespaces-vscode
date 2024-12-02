const Calculator = require('./test');

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should initialize with a value of 0', () => {
        expect(calc.getResult()).toBe(0);
    });

    test('should add a number to the current value', () => {
        calc.add(5);
        expect(calc.getResult()).toBe(5);
    });

    test('should chain add operations', () => {
        calc.add(5).add(3);
        expect(calc.getResult()).toBe(8);
    });

    test('should handle adding negative numbers', () => {
        calc.add(-5);
        expect(calc.getResult()).toBe(-5);
    });

    test('should handle adding zero', () => {
        calc.add(0);
        expect(calc.getResult()).toBe(0);
    });
});
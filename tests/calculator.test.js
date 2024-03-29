const calculator = require('../scripts/calculator');

test('Addition (1)', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Addition (2)', () => {
    expect(calculator.add(9, 6)).toBe(15);
});

test('Addition (3)', () => {
    expect(calculator.add(0 ,0)).toBe(0);
});


test('Subtraction (1)', () => {
    expect(calculator.sub(2, 1)).toBe(1);
});

test('Subtraction (2)', () => {
    expect(calculator.sub(1, 2)).toBe(-1);
});

test('Subtraction (3)', () => {
    expect(calculator.sub(0 ,0)).toBe(0);
});


test('Multiplication (1)', () => {
    expect(calculator.mul(2, 3)).toBe(6);
});

test('Multiplication (2)', () => {
    expect(calculator.mul(3, 4)).toBe(12);
});

test('Multiplication (3)', () => {
    expect(calculator.mul(1 ,0)).toBe(0);
});


test('Division (1)', () => {
    expect(calculator.div(4, 2)).toBe(2);
});

test('Division (2)', () => {
    expect(calculator.div(1, 2)).toBe(0.5);
});

test('Division (3)', () => {
    expect(calculator.div(1 ,0)).toBe(Infinity);
});

test('Division (4)', () => {
    expect(calculator.div(0 ,2)).toBe(0);
});

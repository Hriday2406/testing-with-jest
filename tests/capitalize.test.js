let capitalize = require('../scripts/capitalize')

test('Test 1', () => {
    expect(capitalize('test')).toBe('Test');
});

test('Test 2', () => {
    expect(capitalize('Test')).toBe('Test');
});

test('Test 3', () => {
    expect(capitalize('TEST')).toBe('TEST');
});

test('Test 4', () => {
    expect(capitalize('')).toBe('');
});

test('Test 5', () => {
    expect(capitalize('123')).toBe('123');
});

test('Test 6', () => {
    expect(capitalize('@!#')).toBe('@!#');
});
const revString = require('../scripts/reverseString');

test('Test 1', () => {
    expect(revString('Test')).toBe('tseT');
});

test('Test 2', () => {
    expect(revString('aBcD')).toBe('DcBa');
});

test('Test 3', () => {
    expect(revString('')).toBe('');
});

test('Test 4', () => {
    expect(revString('123')).toBe('321');
});

test('Test 5', () => {
    expect(revString('@#!')).toBe('!#@');
});


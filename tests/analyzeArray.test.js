const analyze = require('../scripts/analyzeArray');

test('Average', () => {
    expect(analyze([1,8,3,4,2,6]).average).toBe(4);
});

test('Minimum', () => {
    expect(analyze([1,8,3,4,2,6]).min).toBe(1);
});

test('Maximum', () => {
    expect(analyze([1,8,3,4,2,6]).max).toBe(8);
});

test('Length', () => {
    expect(analyze([1,8,3,4,2,6]).length).toBe(6);
});


test('Empty Average', () => {
    expect(analyze([]).average).toBe(undefined);
});

test('Empty Minimum', () => {
    expect(analyze([]).min).toBe(undefined);
});

test('Empty Maximum', () => {
    expect(analyze([]).max).toBe(undefined);
});

test('Empty Length', () => {
    expect(analyze([]).length).toBe(0);
});

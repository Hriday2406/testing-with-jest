const cipher = require('../scripts/caesarCipher');

test('Normal Case', () => {
    expect(cipher('test', 3)).toBe('WHVW');
});

test('Capital Case', () => {
    expect(cipher('TEST', 3)).toBe('WHVW');
});

test('Mix Case', () => {
    expect(cipher('TeSt', 3)).toBe('WHVW');
});

test('Negative Shift Case', () => {
    expect(cipher('test', -3)).toBe('QBPQ');
});

test('Full Loop Case', () => {
    expect(cipher('test', 26)).toBe('TEST');
});    

test('With Space Case', () => {
    expect(cipher('i have space', 3)).toBe('L KDYH VSDFH');
});    

test('With Punctuation Case', () => {
    expect(cipher('test.', 3)).toBe('WHVW.');
});    

const api = require('../index.js');

describe('api', () => {
  it('should sum two numbers', () => {
    const result = api.somaDoisNumeros({x:1, y:2});
    expect(result).toBe(3);
  })
  it('should throw an error if y is missing', () => {
    expect(() => api.somaDoisNumeros({x:1})).toThrow();
  })
  it('should throw an error if x is missing', () => {
    expect(() => api.somaDoisNumeros({y:1})).toThrow();
  })
  it('should return the longest word', () => {
    const result = api.longestWord({phrase:'fun&!! time'});
    expect(result).toBe('time');
  })
})

const api = require('../index.js');

describe('api', () => {
  it('should sum two numbers', () => {
    const result = api.somaDoisNumeros({x:1, y:2});
    expect(result).toBe(3);
  })
})

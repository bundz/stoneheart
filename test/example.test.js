const { expect } = require('chai');

describe('Soma', () => {
  context('quando eu somo 5 e 4', () => {
    it('o resultado tem que ser 9', () => {
      expect(5 + 4).to.be.equals(9);
    });
  })
});
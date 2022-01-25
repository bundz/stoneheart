const Player = require('../src/player');
const Hunter = require('../src/hunter');

describe('Hunter', () => {
  
  context('classAbility', () => {
    it('should deal 2 damage to the oponent', () => {
      const hunter = new Hunter();
      const target = new Player();
      hunter.setOponent(target);
      hunter.classAbility();
    });
  }); 
});
const Graveyard = require('./graveyard');
const MinionCard = require('./minionCard');

class Battlefield {
  constructor(capacity=7) {
    this.minions = [];
    this.capacity = capacity;
  }

  removeCard(index) {
    const minion = this.minions[index];

    if(!minion) {
      return;
    }

    Graveyard.addCard(minion);
    this.minions.splice(index, 1);
  }

  addCard(card) {
    this.minions.push[card];
  }
};

module.exports = Battlefield;
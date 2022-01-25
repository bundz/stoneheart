const Graveyard = require('./graveyard');
const MinionCard = require('./minionCard');

class Battlefield {
  constructor(graveyard, capacity=7) {
    this.minions = [];
    this.capacity = capacity;
    this.graveyard = graveyard;
  }

  removeCard(index) {
    const minion = this.minions[index];

    if(!minion) {
      return;
    }

    this.graveyard.addCard(minion);
    this.minions.splice(index, 1);
  }

  addCard(card) {
    this.minions.push(card);
  }
};

module.exports = Battlefield;
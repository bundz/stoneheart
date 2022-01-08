const Graveyard = require('./graveyard');
const MinionCard = require('./minionCard');

class Battlefield {
  constructor(capacity){
    this.minions = [];
    this.capacity = 7;
  }
  removeCard(index){
    for (let i = 0; i < this.minions.length; i++){
      if (this.minions[i].id == index){
        Graveyard.addCard(minions[i]);
        this.minions.splice(i,1);
      }
    }
  }
  addCard(card){
    this.minions.push[card];
  }

};

module.exports = Battlefield;
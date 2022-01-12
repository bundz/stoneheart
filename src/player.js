const Card = require("./card");
const Deck = require("./deck");
const Battlefield = require("./battlefield");
const Graveyard = require("./graveyard");
const Match = require("./match");

class Player {
  constructor (id, name, deck) {
    this.id = id;
    this.name = name;
    this.life = 30;
    this.totalMana = 0;
    this.currentMana = 0;
    this.deck = deck;
    this.graveyard = new Graveyard();
    this.battlefield = new Battlefield(this.graveyard);
    this.hand = [];
  }

  setOponent(player) {
    this.oponent = player;
  }

  setMatch(match) {
    this.match = match;
  }

  passTurn() {
    this.match.nextTurn();
  }

  castCard(cardIndex) {

  }

  addTotalMana(num) {

    if(this.totalMana === 10) {
      return;
    }

    this.totalMana += num;
  }

  drawCard() {

  }

  classAbility() {}

  attack(attackerIndex,targetIndex) {
    const attacker = this.battlefield.getMinion(attackerIndex);
    const target = this.oponent.battlefield.getMinion(targetIndex);
    attacker.hit(target);
    target.hit(attacker);
  }

  suffer(damage) {
    //sofre dano
    if(this.isDead()) {
      this.match.finish();
    }
  }

  isDead() {
    
  }

  shuffleDeck() {
    
  }

  drawInitialCards() {
    //this.hand.push(deck.pop()) 3x
  }
};

module.exports = Player;
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
    this.hand.push(this.deck.pop());
  }

  classAbility() {}

  attack(attackerIndex,targetIndex) {
    const attacker = this.battlefield.getMinion(attackerIndex);
    const target = this.oponent.battlefield.getMinion(targetIndex);
    attacker.hit(target);
    target.hit(attacker);
  }

  suffer(damage) {
    this.life -= damage;
    if(this.isDead()) {
      this.match.finish();
    }
  }

  isDead() {
    
  }

  shuffleDeck() {
    this.deck.shuffle(this.deck);
  }

  drawInitialCards() {
    for (let i = 0; i < 3; i++){
      this.hand.push(this.deck.pop());
    }
  }
};

module.exports = Player;
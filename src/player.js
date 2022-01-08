const Card = require("./card");
const Deck = require("./deck");
const Battlefield = require("./battlefield");
const Graveyard = require("./graveyard");
const Match = require("./match");

class Player {
  constructor (id, name, totalMana, currentMana, playerClass){
    this.id = id;
    this.name = name;
    this.life = 30;
    this.totalMana = totalMana;
    this.currentMana = currentMana;
    this.deck = Deck;
    this.battlefield = Battlefield;
    this.graveyard = Graveyard;
    this.playerClass = playerClass;
    this.match = Match;
    this.hand = [Card, Card, Card];
    this.oponent = Player;
  }
  passTurn(){

  }
  castCard(cardIndex){

  }
  drawCard(){

  }
  classAbility(){

  }
  attack(){

  }
  attack(attacker,target){


  }
  suffer(damage){

  }
  isDead(){
    
  }
};

module.exports = Player;
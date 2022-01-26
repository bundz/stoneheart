const { expect } = require('chai');
const Battlefield = require('../src/battlefield');
const cardsData = require('../database/cards.json');
const Card = require('../src/card');
const CardLoader = require('../src/cardLoader');
const Graveyard = require("../src/graveyard");

describe('Battlefield', () => {
  let cardLoader;
  let cards;
  const graveyard = new Graveyard();
  const battlefield = new Battlefield(graveyard);


  beforeEach(() => {
    cardLoader = new CardLoader(cardsData);
    cards = cardLoader.generateCards([1,3,4,5]);
  })


  context('addCard',() => {
    it('should add card in battlefield', () => {
      let card = cards[0];
      battlefield.addCard(card);
      expect(battlefield.minions.length).to.not.equal(0);
      expect(battlefield.minions[0]).to.be.instanceOf(Card);
    })
  });

  context('removeCard',() => {
    it('should remove card in battlefield', () => {
      battlefield.addCard(cards[1]);
      battlefield.removeCard(1);
      battlefield.removeCard(4);
      expect(battlefield.minions.length).to.not.equal(2);
    })
  })
})
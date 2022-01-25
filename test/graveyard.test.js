const { expect } = require('chai');
const Graveyard = require("../src/graveyard");
const cardsData = require('../database/cards.json');
const Card = require('../src/card');
const CardLoader = require('../src/cardLoader');

describe('Graveyard', () => {

  let cardLoader;
  let cardsDeck;
  const graveyard = new Graveyard();

  beforeEach(() => {
    cardLoader = new CardLoader(cardsData);
    cardsDeck = cardLoader.generateCards([1]);
  })

  context('addCard',() => {
    it('should add card in graveyard', () => {
      let card = cardsDeck[0];
      graveyard.addCard(card);
      expect(graveyard.cards.length).to.not.equal(0);
      expect(graveyard.cards.length).to.be.equals(1);
      expect(graveyard.cards[0]).to.be.instanceOf(Card);
    })
  });

})

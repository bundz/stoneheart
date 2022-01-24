const { expect } = require('chai');
const CardLoader = require('../src/cardLoader');
const cardsData = require('../database/cards.json');
const Deck = require('../src/deck');
const Card = require('../src/card');

describe('Deck', () => {

  let cardLoader;
  let cards;

  beforeEach(() => {
    cardLoader = new CardLoader(cardsData);
    cards = cardLoader.generateCards([ 1, 1, 2, 2, 3, 4, 5 ]);
    console.log(1);
  })

  context('pop', () => {
    it('should return a card', () => {
      const deck = new Deck(cards);
      let card = deck.pop();
      expect(card).to.be.instanceOf(Card);
      expect(deck.getLength()).to.be.equals(6);
    });
  });

  context('constructor', () => {
      it('should have cards', () => {
        const deck = new Deck(cards);
        expect(deck).to.be.a('array');
      });
  });

  context('shuffle', () => {
      it('should keep cards and length', () => {

      });
  });

  context('isEmpty', () => {
      it('should return false', () => {

      });
  });

  context('getLength', () => {
      it('should return 7', () => {

      });
  });
});
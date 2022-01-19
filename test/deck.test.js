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

    });
  });

  context('constructor', () => {
      it('should have cards', () => {
        const deck = new Deck(cards);
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
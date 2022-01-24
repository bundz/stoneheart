const { expect } = require('chai');
const CardLoader = require('../src/cardLoader');
const cardsData = require('../database/cards.json');
const Deck = require('../src/deck');
const Card = require('../src/card');

 describe.only('Deck', () => {

  let cardLoader;
  let cards;
  let deck;

  beforeEach(() => {
    cardLoader = new CardLoader(cardsData);
    cards = cardLoader.generateCards([ 1, 1, 2, 2, 3, 4, 5 ]);
    deck = new Deck(cards);
  })

  context('pop', () => {
    it('should return a card', () => {
      let card = deck.pop();
      expect(card).to.be.instanceOf(Card);
      expect(deck.getLength()).to.be.equals(6);
    });
  });

  context('constructor', () => {
      it('should have cards', () => {
        expect(deck).to.be.instanceOf(Deck);
        expect(deck).to.have.property('cards');
      });
  });

  context('shuffle', () => {
      it('should keep cards and length', () => {
        deck.shuffle(cards);
        expect(deck).to.have.property('cards');
        expect(cards.length).to.equal(8);
      });
  });

  context('isEmpty', () => {
      it('should return false', () => {
        expect(deck.isEmpty()).to.be.false;
      });
  });

  context('getLength', () => {
      it('should return 7', () => {
        expect(cards.length).to.equal(7);
      });
  });
});
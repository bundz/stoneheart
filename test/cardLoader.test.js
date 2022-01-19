const { expect } = require('chai');
const CardLoader = require('../src/cardLoader');
const cardsData = require('../database/cards.json');
const Card = require('../src/card');

describe('CardLoader', () => {

  context('when I initialize the CardLoader with valid json data', () => {

    it('should transform cards data into a hash', () => {
      const cardLoader = new CardLoader(cardsData);
      expect(cardLoader).to.have.property('cards');
      expect(cardLoader.cards).to.be.an('object');
    });

  });

  context('when I execute the generateCards method', () => {

    it('should return an array of cards', () => {
      const cardLoader = new CardLoader(cardsData);
      const cards = cardLoader.generateCards([ 1, 1, 2, 2, 3, 3 ]);
      expect(cards).to.be.instanceOf(Array);
      
      for(const card of cards) {
        expect(card).to.be.instanceOf(Card);
        expect(card).to.have.property('id');
        expect(card.id).to.be.a('number');
        expect(card).to.have.property('name');
        expect(card.name).to.be.a('string');
        expect(card).to.have.property('cardClass');
        expect(card.cardClass).to.be.a('string');
        expect(card).to.have.property('manaCost');
        expect(card.manaCost).to.be.a('number');
      }

    });

  });

});
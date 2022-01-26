const { expect } = require('chai');
const minionCard = require('../src/minionCard');
const cardsData = require('../database/cards.json');
const CardLoader = require('../src/cardLoader');

describe('minionCard', () => {
  let cardLoader;
  let cards;
  let card;
  let cardOponent;


  beforeEach(() => {
    cardLoader = new CardLoader(cardsData);
    cards = cardLoader.generateCards([1,2]);
    card = cards[0];
    cardOponent = cards[1];

  })


  context('getAttack', () => {
    it('should get attack in minion Card', () => {
      expect(card).to.be.instanceOf(minionCard);
      expect(card.getAttack()).to.be.a('number');
    })
  })
  context('getLife', () => {
    it('should get life in minion Card', () => {
      expect(card.getLife()).to.be.a('number');
    })
  })
  context('getRace', () => {
    it('should get race in minion Card', () => {
      expect(card.getRace()).to.be.a('string');
    })
  })
  context('suffer', () => {
    it('should suffer damage in minion Card', () => {
      card.suffer(1);
      expect(card.getLife()).to.be.below(4);
    })
  })
  context('hit', () => {
    it('should hit a minion Card', () => {
      cardOponent.hit(card);
      expect(card.getLife()).to.be.below(4);
    })
  })
  context('isDead', () => {
    it('should verify if minion Card is dead', () => {
      card.hit(cardOponent);
      expect(cardOponent.isDead()).to.be.ok;
    })
  })
})
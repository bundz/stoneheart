const {expect} = require("chai");
const CardLoader = require('../src/cardLoader');
const cardsData = require('../database/cards.json');

describe('Card', () =>{

    let cardLoader;
    let cards;
    let card;

    beforeEach(() => {
        cardLoader = new CardLoader(cardsData);
        cards = cardLoader.generateCards([1]);
        card = cards[0];
    })

    context('getName', () => {
        it("it should return the card name", () => {
            expect(card.getName()).to.be.a('String');
        });
    });

    context('getCardClass', () => {
        it("it should return the class type", () => {
            expect(card.getCardClass()).to.be.a('string');
        });
    });

    context('getManaCost', () => {
        it("it should return the mana cost", () => {
            expect(card.getManaCost()).to.be.a('number');
        });
    });

    context('getId', () => {
        it("it should return card id", () => {
            expect(card.getId()).to.be.a('number');
        });
    });

})
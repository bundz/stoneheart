const {expect} = require("chai")
const CardLoader = require('../src/cardLoader');
const cardsData = require('../database/cards.json');
const Deck = require('../src/deck');
const Player = require('../src/player')
const Battlefield = require("../src/battlefield");
const Graveyard = require("../src/graveyard");
const Card = require("../src/card");
const Match = require("../src/match");
const Mage = require("../src/mage");
const Hunter = require("../src/hunter");

describe.only('Player', () => {

    let cardLoader;
    let cards;
    let deck;
    let battlefield;
    let graveyard;
    let mage;
    let hunter;
    
    beforeEach(() => {
        cardLoader = new CardLoader(cardsData);
        cards = cardLoader.generateCards([ 1, 1, 2, 2, 3, 4, 5 ]);
        deck = new Deck(cards);
        mage = new Mage(1, "Jone", deck);
        hunter = new Hunter(2, "Muras", deck);
    })
    
    context('constructor', () => {
        it('Should initiate the player with a valid Deck, Graveyard, Battlefield and valid data informations', () => { 
            expect(mage.id).to.be.a('number')
            expect(mage.name).to.be.a("string")
            expect(mage.deck.cards).to.be.a("array")

            for(card of mage.deck.cards){
                expect(card).to.be.instanceof(Card)
            }

            expect(mage.currentMana).to.be.a('number')
            expect(mage.life).to.be.a("number")
            expect(mage.totalMana).to.be.a("number")
            expect(mage.graveyard).to.be.instanceof(Graveyard)
            expect(mage.battlefield).to.be.instanceof(Battlefield)
            expect(mage.hand).to.be.an("array")

        })
    })

    context('setOponent', () => {
        it('Should set the oponent', () => {
            mage.setOponent(hunter);
            expect(mage.oponent).to.be.instanceof(Player);
        })
    })

    context('setMatch', () => {
        it('Should set the match', () => {
            const match = new Match(mage, hunter);
            mage.setMatch(match);
            expect(mage.match).to.be.instanceof(Match);
        })
    })

    context('nextTurn', () => {
        it('Should change the atual player', () => {
            const match = new Match(mage, hunter);
            mage.match = match;
            match.currentPlayer = mage;
            mage.passTurn();
            expect(match.currentPlayer).to.be.equal(mage.oponent)
        })
    })

    context('addTotalMana', () => {
        it('Must add one to mana except when equal to max value', () => {
            let mana = mage.totalMana;
            
            mage.addTotalMana(3);
            
            expect(mage.totalMana).to.be.equal(mana+3);
            expect(mage.totalMana).to.be.below(11)
        })
    })
})
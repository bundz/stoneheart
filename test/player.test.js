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

describe('Player', () => {

    let cardLoader;
    let cards;
    let deck;
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
            mage.oponent = hunter;
            match.currentPlayer = mage;
            hunter.addTotalMana(1);
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

    context('refreshMana', () => {
        it('Should make the currentMana the same as totalMana', () => {
            mage.currentMana = 1;
            mage.totalMana = 3;
            
            mage.refreshMana();
            
            expect(mage.currentMana).to.be.equal(mage.totalMana);
        })
    })
    
    context('drawCard', () => {
        it('Should remove a card from deck and add it to hand', () => {
            let hand_length = mage.hand.length;
            let deck_length = mage.deck.getLength();
            mage.drawCard();
            
            expect(mage.hand.length).to.be.equal(hand_length+1);
            expect(mage.deck.getLength()).to.be.equal(deck_length-1);
        })
    })

    context('suffer', () => {
        it('Should damage the player', () => {
            let life = mage.life;
            mage.suffer(1);
            expect(mage.life).to.be.equal(life-1);
        })

        it('Should finish the match if someone die', () => {
            
            const match = new Match(mage, hunter);
            mage.match = match;
            mage.life = 1
            mage.suffer(1);
            expect(mage.match.state).to.be.equal("finished");
        })
    })

    context('isDead', () => {
        it('Should return false if players life is above zero', () => {
            expect(mage.isDead()).to.be.false
        })
        it('Should return true if players life is under one', () => {
            mage.life = 0
            expect(mage.isDead()).to.be.true
        })
    })

    context('suffleDeck', () => {
        it('Should shuffle the player deck', () => {
            let deck_length = mage.deck.getLength();
            mage.shuffleDeck();
            expect(mage.deck.getLength()).to.be.equals(deck_length)
            for( card of mage.deck.cards){
                expect(card).to.be.instanceOf(Card);
            }
        })
    })

    context('drawInitialCards', () => {
        it('Should draw the players first hand', () => {
            mage.drawInitialCards();
            expect(mage.hand.length).to.be.equal(3);

            for( card of mage.hand ){
                expect(card).to.be.instanceOf(Card)
            }
        })
    })
})
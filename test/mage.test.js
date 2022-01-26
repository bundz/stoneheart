const {expect} = require("chai")
const CardLoader = require('../src/cardLoader');
const cardsData = require('../database/cards.json');
const Player = require('../src/player')
const Mage = require("../src/mage");
const Deck = require('../src/deck');
const Hunter = require("../src/hunter");

describe('Mage', () => {
    cardLoader = new CardLoader(cardsData);
    cards = cardLoader.generateCards([1]);
    let deck = new Deck(cards);
    const player = new Mage(1, "Jone", deck);
    const player2 = new Hunter(1, "Muras", deck);

    context('classAbility', () => {
        it('Should deal damage to minions', () => {
            let minion1 = cards[0];
            let minionLife = minion1.life;
            player.classAbility(minion1);

            expect(minion1.life).to.be.equals(minionLife-1);
        })

        it('Should deal damage to players', () => {
            let playerLife = player.life;
            player.classAbility(player2);
            expect(player2.life).to.be.equals(playerLife-1)
        })
    })
})

const { expect } = require('chai');
const Hunter = require('../src/hunter');
const CardLoader = require('../src/cardLoader');
const cardsData = require('../database/cards.json');
const Deck = require('../src/deck');
const Match = require('../src/match');
const Player = require('../src/player');

describe('Match', () => {

  let cardLoader;
  let cards;
  let deck;
  let player1;
  let player2;

  beforeEach(() => {
    cardLoader = new CardLoader(cardsData);
    cards = cardLoader.generateCards([ 1, 1, 2, 2, 3, 4, 5 ]);
    deck = new Deck(cards);
    player1 = new Hunter(1, 'muras', deck);
    player2 = new Hunter(2, 'jone', deck);
  });

  context('constructor', () => {
    it('should have 2 players', () => {
      const match = new Match(player1, player2);
      expect(match).to.be.instanceOf(Match);
      expect(match).to.have.property('player1');
      expect(match).to.have.property('player2');
    });
  });

  context('draw first player', () => {
    it('should assign currentPlayer a value', () => {
      const match = new Match(player1, player2);
      match.drawFirstPlayer();
      expect(match.currentPlayer).to.be.instanceOf(Player);
    });
  });

  context('make players shuffle decks', () => {
    it('players decks should keep cards and size', () => {
      const match = new Match(player1, player2);
      match.makePlayersShuffleDecks();
      expect(player1.deck.cards.length).to.equals(7);
      expect(player2.deck.cards.length).to.equals(7);
    });
  })

  context('make players draw initial cards', () => {
    it('players hand should have 3 cards', () => {
      const match = new Match(player1, player2);
      match.makePlayersDrawInitialCards();
      expect(player1.hand.length).to.equals(3);
      expect(player2.hand.length).to.equals(3);
    });
  });

  context('get current player', () => {
    it('should return a player', () => {
      const match = new Match(player1, player2);
      match.start();
      const currentPlayer = match.getCurrentPlayer();
      expect(currentPlayer).to.be.instanceOf(Player);
    });
  });

  
  context('next turn', () => {
    it('should change current player, add total mana and refresh mana', () => {
      const match = new Match(player1, player2);
      match.start();
      match.drawFirstPlayer(); // BUGADASSO
      match.nextTurn();
      expect(match.currentPlayer.totalMana).to.equal(1);
      expect(match.currentPlayer.currentMana).to.equal(1);
    });
  });

  context('start', () => {
    it('current player and players hand should be diferent from null, state should be running', () => {
      const match = new Match(player1, player2);
      match.start();
      expect(match.currentPlayer).to.not.be.null;
      expect(player1.hand).to.not.be.null;
      expect(player2.hand).to.not.be.null;
      expect(match.state).to.equals('running');
    });
  });

  context('finish', () => {
    it('should assign a winner', () => {
      const match = new Match(player1, player2);
      match.start();
      match.player1.life = 0;
      match.finish();
      match.player2.life = 0;
      match.player1.life = 30;
      match.finish();
      expect(match.state).to.be.equal('finished');
      expect(match.winner).to.be.instanceOf(Player);
    });
  });
});
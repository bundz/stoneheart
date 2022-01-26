class Match {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = null;
    this.state = null;
    this.winner = null;
  }
  
  drawFirstPlayer() {
    if(Math.ceil(Math.random() * 2) == 1) {
      this.currentPlayer = this.player1;
      return;
    }

    this.currentPlayer = this.player2;
  }
  
  makePlayersShuffleDecks() {
    this.player1.shuffleDeck();
    this.player2.shuffleDeck();
  }

  makePlayersDrawInitialCards() {
    this.player1.drawInitialCards();
    this.player2.drawInitialCards();
  }

  start() {
    this.state = 'running';
    this.player1.oponent = this.player2;
    this.player2.oponent = this.player1;
    this.drawFirstPlayer();
    this.currentPlayer.addTotalMana(1);
    this.currentPlayer.refreshMana();
    this.makePlayersShuffleDecks();
    this.makePlayersDrawInitialCards();
  }
  
  getCurrentPlayer() {
    return this.currentPlayer;
  }
  
  nextTurn() {
    this.currentPlayer = this.currentPlayer.oponent;
    this.currentPlayer.addTotalMana(1);
    this.currentPlayer.refreshMana();
  }

  finish() {
    this.state = 'finished';

    if(this.player1.isDead()) {
      this.winner = this.player2;
      return;
    }
    this.winner = this.player1;
  }
};

module.exports = Match;
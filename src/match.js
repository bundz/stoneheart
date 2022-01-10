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
    this.drawFirstPlayer();
    this.makePlayersShuffleDecks();
    this.makePlayersDrawInitialCards();
  }
  
  getCurrentPlayer() {
    return this.currentPlayer;
  }
  
  nextTurn() {
    this.currentPlayer = this.currentPlayer.oponent;
  }

  finish() {
    this.state = 'finished';

    //WHO IS THE WINNER
  }
};

module.exports = Match;
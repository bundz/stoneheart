class Match {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    let currentPlayer;
    let state;
  }
  
  drawFirstPlayer() {
    if(Math.ceil(Math.random() * 2) == 1) {
      this.currentPlayer = this.player1;
    } 
    this.currentPlayer = this.player2;
  }
  
  makePlayersShuffleDecks() {
    this.player1.deck.shuffle();
    this.player2.deck.shuffle();
  }

  makePlayersDrawInitialCards() {
    this.player1.pop();
    this.player2.pop();
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
  
  nextTurn(){
    this.currentPlayer = this.currentPlayer.oponent;
  }

  finish() {
    this.state = 'finished';
  }
};

module.exports = Match;
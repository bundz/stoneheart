class Match {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    let currentPlayer;
  }

  drawFirstPlayer() {
    if(Math.ceil(math.random() * 2) == 1) {
      this.currentPlayer = this.player1;
    } 
    this.currentPlayer = this.player2;
  }
  
  start() {
    this.drawFirstPlayer();
    this.makePlayersShuffleDecks();
  }
  
  makePlayersDrawInitialCards() {
    this.player1.pop();
    this.player2.pop();
  }
  
  getCurrentPlayer() {
    return this.currentPlayer;
  }
  
  nextTurn(){
    this.currentPlayer = this.currentPlayer.oponent;
  }
  
  makePlayersShuffleDecks() {
    
  }

  finish() {
  }
};

module.exports = Match;
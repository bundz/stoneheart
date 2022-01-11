class Deck {
  constructor(cards) {
    this.cards = [];
  }

  isEmpty() {
    if(this.cards.length() === 0) {
      return true;
    }
    return false;
  }

  getLength() {
    return this.cards.length;
  }

  shuffle() {

  }

  pop() {
    
  }
};

module.exports = Deck;
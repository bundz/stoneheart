class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  isEmpty(cards) {
    if(cards.length === 0) {
      return true;
    }
    return false;
  }

  getLength() {
    return this.cards.length;
  }

  shuffle(cards) {
    for(let i = cards.length; i > 4; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  }

  pop() {
    return this.cards.pop();
  }
};

module.exports = Deck;
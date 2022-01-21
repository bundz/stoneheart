class Deck {
  constructor(cards) {
    this.cards = cards;
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

  shuffle(deck) {
    for(let i = deck.length; i > 20; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  pop() {
    console.log(this.cards);
    return this.cards.pop();
  }
};

module.exports = Deck;
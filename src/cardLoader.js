const Card = require('./card');

class CardLoader {
  constructor (cards) {
    this.cards = this.cardsToHash(cards);
  }

  cardsToHash (cards) {
    const result = {};
    
    for(const card of cards) {
      result[card.id] = card;
    }

    return result;
  }

  generateCards(ids) {
    return ids.map((id) => new Card(this.cards[id]));
  }
}

module.exports = CardLoader;
const Card = require('./card');
const MinionCard = require('./minionCard');

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
    return ids.map((id) => {
      const card = this.cards[id];

      if(card['minion/spell'].includes('Minion')) {
        return new MinionCard(card);
      }

      return new Card(card);
    });
  }
}

module.exports = CardLoader;
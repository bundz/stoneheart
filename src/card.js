class Card{
    constructor({ id, name, class: cardClass, cost: manaCost }) {
        this.id = id;
        this.name = name;
        this.cardClass = cardClass;
        this.manaCost = Number(manaCost);
    };

    getNome() {
        return this.name;
    };

    getCardClass() {
        return this.cardClass;
    };

    getManaCost() {
        return this.manaCost;
    };

    getId() {
        return this.id;
    };

};

module.exports = Card;

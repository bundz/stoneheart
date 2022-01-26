const Battlefield = require('./battlefield');
const Card = require('./card');

class MinionCard extends Card {
    constructor({ id, name, race, class: cardClass, cost, attack, health: life }) {
      super({ id, name, class: cardClass, cost });
      this.attack = parseInt(attack);
      this.life = parseInt(life);
      this.race = race;
    }

    getAttack() {
      return this.attack;
    }
    
    getLife() {
      return this.life;
    }

    getRace() {
      return this.race;
    }

    suffer(damage) {
      this.life -= damage;
      if(this.isDead()) {
        this.battlefield.removeCard(this);
      }
    }

    hit(minion) {
      minion.suffer(this.attack);
    }
    
    isDead() {
      return this.life <= 0;
    } 
};

module.exports = MinionCard;
const Battlefield = require('./battlefield');
const Card = require('./card');

class MinionCard extends Card {
    constructor(attack, life, race){
      this.attack = attack;
      this.life = life;
      this.race = race;
    }

    getAttack(){
      return this.attack;
    }
    
    getLife(){
      return this.life;
    }

    getRace(){
      return this.race;
    }

    suffer(damage){
      this.life -= damage;    
      if(this.isDead()){
        Battlefield.removeCard(this.id);
      }
    }

    hit(minion){
      minion.suffer(this.attack);
      this.life -= minion.attack;
    }
    
    isDead(){
      return this.life < 0 ? true : false;
    } 
};

module.exports = MinionCard;
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

    }
    hit(minion){

    }
    isDead(){

    }
};

module.exports = MinionCard;
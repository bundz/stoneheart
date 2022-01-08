const Player = require('./player');

class Mage extends Player {
    ability(target){
        this.target.suffer(1);
    }
};

module.exports = Mage;
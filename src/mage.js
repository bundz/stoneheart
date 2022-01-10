const Player = require('./player');

class Mage extends Player {
    classAbility(target) {
        this.target.suffer(1);
    }
};

module.exports = Mage;
const Player = require('./player');

class Mage extends Player {
    classAbility(target) {
        target.suffer(1);
    }
};

module.exports = Mage;  
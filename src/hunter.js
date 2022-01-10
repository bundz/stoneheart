const Player = require('./player');

class Hunter extends Player {
  classAbility() {
    this.oponent.suffer(2);
  }
};

module.exports = Hunter;
const Player = require('./player');

class Hunter extends Player {
  ability() {
    this.oponent.suffer(2);
    if(this.oponent.isDead()) {
      finish();
    }
  }
};

module.exports = Hunter;
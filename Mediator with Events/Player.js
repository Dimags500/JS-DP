var PlayerScoredEventArgs = require("./Events");

class Player {
  constructor(name, game) {
    this.game = game;
    this.name = name;
    this.goalsScored = 0;
  }

  score() {
    this.goalsScored++;
    let args = new PlayerScoredEventArgs(this.name, this.goalsScored);
    this.game.events.fire(this, args);
  }
}

module.exports = Player;

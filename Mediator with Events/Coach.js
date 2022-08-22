var PlayerScoredEventArgs = require("./Events");
class Coach {
  constructor(game) {
    game.events.subscribe((sender, args) => {
      if (args instanceof PlayerScoredEventArgs) {
        argd.print().call(args);
        console.log(` coach says : Well done , ${args.playerName}`);
      }
    });
  }
}

module.exports = Coach;

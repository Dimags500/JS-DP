class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach((v, k) => v(sender, args));
  }
}

class PlayerScoredEventArgs {
  constructor(playerName, currGoals) {
    this.playerName = playerName;
    this.currGoals = currGoals;
  }

  print() {
    console.log(`${this.playerName} done his ${this.currGoals} goal `);
  }
}

module.exports = PlayerScoredEventArgs;
module.exports = Event;

class Person {
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }
  // chat rom will invoke this func for every person in chat
  receive(sender, message) {
    let log = `${sender} : ${message}`;
    this.chatLog.push(log);
    console.log(`[${this.name}'s chat session]  ${log}`);
  }

  messageToAll(message) {
    this.room.broadcast(this.name, message);
  }
  privateMessage(destination, message) {
    this.room.message(this.name, destination, message);
  }
}

module.exports = Person;

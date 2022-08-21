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
}

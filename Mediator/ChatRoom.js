class ChatRoom {
  constructor() {
    this.people = [];
  }

  join(person) {
    let joinMsg = `${person.name} joins the chat`;
    this.broadcast("room", joinMsg);
    person.room = this;
    this.people.push(person);
  }

  broadcast(source, message) {
    for (let p of this.people) {
      if (p.name !== source) {
        p.receive(source, message);
      }
    }
  }
}

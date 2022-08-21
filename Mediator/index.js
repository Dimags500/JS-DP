var ChatRoom = require("./ChatRoom");
var Person = require("./Person");

let room = new ChatRoom();

let jin = new Person("Jin");
let den = new Person("Den");
let ron = new Person("Ron");

room.join(jin);
room.join(den);
room.join(ron);
// [Jin's chat session]  room : Den joins the chat
// [Jin's chat session]  room : Ron joins the chat
// [Den's chat session]  room : Ron joins the chat

let samson = new Person("Samson");
room.join(samson);
// [Jin's chat session]  room : Samson joins the chat
// [Den's chat session]  room : Samson joins the chat
// [Ron's chat session]  room : Samson joins the chat

samson.messageToAll("Hi people");
// [Jin's chat session]  Samson : Hi people
// [Den's chat session]  Samson : Hi people
// [Ron's chat session]  Samson : Hi people

den.privateMessage("Samson", "hi goot to see you");
// [Samson's chat session]  Den : hi goot to see you

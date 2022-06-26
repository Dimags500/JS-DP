const { PresistenceManager } = require("./solution");

//class should have one reason to change / one responsibility
// reason of change should be related to te this responsibility

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c} : ${text}`;
    this.entries[c] = entry;

    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  getEntries() {
    return this.entries;
  }
}

Journal.count = 0;

let journal = new Journal();
journal.addEntry("Hello j1");
journal.addEntry("J2 here");
console.log(journal.toString());

const entries = journal.getEntries();
const manager = new PresistenceManager();

manager.saveToFile(entries, "path");

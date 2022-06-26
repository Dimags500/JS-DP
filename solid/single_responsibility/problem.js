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

  saveToFile(filename) {
    // fs save implimentation
  }
  saveByUrl(url) {
    // save by url save implimentation
  }

  loadFormFile(filename) {
    //  load fs implimentation
  }
  loadFormUrl(url) {
    // load by url  implimentation
  }
}

Journal.count = 0;

let j = new Journal();
j.addEntry("Hello j1");
j.addEntry("J2 here");

console.log(j.toString());

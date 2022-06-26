class PresistenceManager {
  process() {}

  saveToFile(journal, filename) {
    // fs save implimentation

    console.log("file saved");
  }

  saveByUrl(journal, url) {
    // save by url save implimentation
    console.log("file saved");
  }

  loadFormFile(journal, filename) {
    //  load fs implimentation
    console.log("file load");
  }

  loadFormUrl(journal, url) {
    // load by url  implimentation
    console.log("file load");
  }
}

module.exports = { PresistenceManager };

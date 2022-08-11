// basee type shuld be able to take dirived type

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  toString() {
    return `  ${this.width}x${this.height} = ${this.width * this.height}`;
  }
}

let rec1 = new Rectangle(10, 20);
console.log(rec1.toString());

//-------------------------------------------------

class Squre extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let sq = new Squre(2);
console.log(sq.toString());
sq.width = 20;
console.log(sq.toString());

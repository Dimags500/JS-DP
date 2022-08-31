class Neuron {
  constructor() {
    this.in = [];
    this.out = [];
  }

  connectTo(other) {
    this.out.push(other);
    other.in.push(this);
  }

  toString() {
    return (
      ` a neuron with ${this.in.length} inputs ` +
      ` and ${this.out.length} outputs`
    );
  }
}

module.exports = Neuron;

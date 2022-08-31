let Neuron = require("./Neuron");

let n1 = new Neuron();
let n2 = new Neuron();

n1.connectTo(n2);

console.log(n1.toString());
console.log(n2.toString());

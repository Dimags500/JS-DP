// big number of modification can be requested in future
// solution  the specification pattern
// specification defends class with criteria of filtering
// the combinator is class that combine specification classes

let Color = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

let Size = Object.freeze({
  small: "small",
  midium: "midium",
  large: "large ",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class SpecificationFillter {
  filter(items, spec) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

class ColorSpecification {
  color;
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  size;
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

let apple = new Product("Apple", Color.green, Size.large);
let piano = new Product("Piano", Color.blue, Size.small);
let pen = new Product("Pen", Color.red, Size.midium);
let car = new Product("Car", Color.red, Size.large);

let products = [apple, piano, pen, car];

let sf = new SpecificationFillter();
for (let p of sf.filter(products, new SizeSpecification(Size.large))) {
  console.log(`${p.name} : ${Size.large}`);
}
for (let p of sf.filter(products, new ColorSpecification(Color.red))) {
  console.log(`${p.name} : ${Color.red}`);
}

////////////////////////////////////////////////////////////////////////
// composite specification

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

class OrSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.some((x) => x.isSatisfied(item));
  }
}

let specs = new AndSpecification(
  new ColorSpecification(Color.red),
  new SizeSpecification(Size.large)
);

for (let p of sf.filter(products, specs)) {
  console.log(` AndSpecification | ${p.name} : ${p.color}`);
}

let specs2 = new OrSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.midium)
);

for (let p of sf.filter(products, specs2)) {
  console.log(`OrSpecification | ${p.name} : ${p.color}`);
}

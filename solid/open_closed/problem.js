//open for extention , closed for modification
// this is example of shop , we need to add new filters

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

class ProductFilter {
  filterByColor(product, color) {
    return product.filter((p) => p.color === color);
  }
  // we add new fuctional , we modify class
  // broke the opcs principle
  filterBySize(product, size) {
    return product.filter((p) => p.size === size);
  }

  // another later  modification
  filterBySizeAndColor(product, size, color) {
    return product.filter((p) => p.size === size && p.color === color);
  }

  // state space explosion
}

let apple = new Product("Apple", Color.green, Size.large);
let piano = new Product("Piano", Color.blue, Size.small);
let pen = new Product("Pen", Color.red, Size.midium);
let car = new Product("Car", Color.red, Size.large);

let products = [apple, piano, pen, car];

let pf = new ProductFilter();

for (let p of pf.filterByColor(products, Color.red)) {
  console.log(`${p.name} is ${Color.red}`);
}

for (let p of pf.filterBySize(products, Size.large)) {
  console.log(`${p.name} is ${Color.red}`);
}

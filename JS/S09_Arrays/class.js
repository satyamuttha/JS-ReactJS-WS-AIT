class Product {
  brandName = "Apple";
  modelName;
  price;

  constructor(x, y, z) {
    this.brandName = x;
    this.modelName = y;
    this.price = z;
  }

  printPrice() {
    console.log(this.price);
  }
}

var obj1 = new Product("apple", "iphone 16", 90000);
var obj2 = new Product("samsung", "galaxy", 120000);

obj1.printPrice();

obj2.printPrice();

// console.log(obj1);
// console.log("=================");
// console.log(obj2);

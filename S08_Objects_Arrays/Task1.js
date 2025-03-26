var product = {
  brandName: "Apple",
  modelName: "Iphone 16 Pro Max",
  price: 185000,
  rating: 4.8,
  isStock: true,
  getPrice: () => {
    console.log("Arrow fn in object");
  },
  getDetails: function (x, y) {
    console.log(x, y);
  },
  getDiscount: function discount() {
    console.log("50% Discount");
  },
};

product.getPrice();
product.getDetails(100, 200);
product.getDiscount();

console.log("hey i am console");

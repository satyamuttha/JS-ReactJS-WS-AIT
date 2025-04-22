var arr = [10, 20, 30, 40, 50];

var data = [
  {
    name: "Iphone 16",
    price: 90000,
  },
  {
    name: "Iphone 15",
    price: 70000,
  },
  {
    name: "Iphone 14",
    price: 50000,
  },
];

data.forEach((element, index) => {
  //element = {name:"---",price:----}
  var priceValue = element.price;
  console.log(priceValue);
});

// arr.forEach(function (element, index) {
//   var result = element - 10;
//   console.log(result);
// });

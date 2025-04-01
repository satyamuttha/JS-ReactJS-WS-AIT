var arr = [10, 20, 30, 40];

var newArray = arr.map(function (element, index) {
  var res = element * 10;
  return res;
});

console.log(arr);
console.log("-----------------------");
console.log(newArray);

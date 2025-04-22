var arr = [10, 20, 30, 40];

var newArray = [];

arr.forEach(function (element, index) {
  var res = element * 10;
  newArray.push(res);
});

console.log(newArray);

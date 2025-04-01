var arr = [10, 20, 30, 40, 50, 60, 70, 80]; //[50,60,70,80]

var filteredData = arr.filter(function (element, index) {
  return element < 40;
});

console.log(filteredData);

function f1() {
  var result = 10 + 20;
  console.log(result);
  return true;
}

var returnedValue = f1();
console.log(returnedValue); //undefined

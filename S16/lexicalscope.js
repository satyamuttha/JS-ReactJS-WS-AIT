function outer() {
  var x = 100; //function scope

  function inner() {
    //function scope
    console.log(x);
  }

  inner();

  return inner;
}

var x = outer();

x();
// console.log(x);

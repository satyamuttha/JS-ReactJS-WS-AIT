var x = 10; //global scope

function f1() {
  console.log(x);

  function fn() {
    // not global scope
    console.log(x);
  }
} //global

if (true) {
  //global scope

  console.log(x);
}

var x = 10; //global

function fnAdd() {
  //function block
  //global
  var city = "hyd"; //function
  let name = "raj";
  const pin = 123;

  function f1() {
    //function
    if (true) {
      //if block scope
    } else {
      //else block scope
    }
  }
  f1();
}

function getData() {}

if (true) {
  var n = 100;
}

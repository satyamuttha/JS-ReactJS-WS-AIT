function f1(fn) {
  console.log("f1 is called");
  console.log(fn);
  fn(100);
}

function f2() {
  console.log("f2 is called");
}

f1(f2);

f1(function () {
  console.log("I am anonymous and callback");
});

f1((x) => {
  console.log(x);
  console.log("Arrow with parameter behaves like callback function");
});

const fnExp = () => {
  console.log("function expression as a callback");
};

f1(fnExp);

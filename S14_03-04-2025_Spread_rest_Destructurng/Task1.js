var arr = ["raj", "sneha", "priya"];

var [a, b, c] = arr;

var obj = {
  name: "sagar",
  city: "hyd",
  gender: "male",
};

var { name, city } = obj;

function f1() {
  if (true) {
    console.log(c);
    console.log(city);
  }
}
function f2() {
  if (true) {
  }
  if (true) {
    console.log(b);
  }
  if (true) {
    console.log(b);
    console.log(name);
  }
}
function f3() {
  if (true) {
  }
  if (true) {
    console.log(c);
  }
}

f1();
f2();
f3();

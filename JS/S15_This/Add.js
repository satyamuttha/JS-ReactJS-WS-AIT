var obj1 = {
  z: 100,
};

var obj2 = {
  z: 150,
};

var obj3 = {
  z: 50,
};

function fnAdd(x, y) {
  var result = x + y + this.z; // window.z // global.z //10+undefined = NaN
  console.log(result);
}

// fnAdd.call(obj1, 10, 20);

// fnAdd.call(obj2, 30, 40);

// fnAdd.call(obj3, 10, 10);

// fnAdd.apply(obj3, [30, 50]); //180

// var x = fnAdd.bind(obj3);
// x(100, 100);

// var x = fnAdd.bind(obj3, 20, 100);
// x();

// var fnAdd = fnAdd.bind(obj3, 20, 100);
// fnAdd();

// fnAdd.bind(obj3, 20, 100)();
fnAdd.bind(obj3)(10, 10);

// fnAdd(10, 20); //obj1 - 130

// fnAdd(30, 40); //obj2 - 220

// fnAdd(10, 10); //obj3 - 70

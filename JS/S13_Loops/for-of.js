var arr = [10, 20, 30, 40, 50];

for (var x of arr) {
  if (x == 40) {
    var indexNumber = arr.indexOf(x);
    console.log(indexNumber);
  }
}

//print the index number
//Print only index number of 40

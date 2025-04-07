function f1() {
  var gender = "male";

  if (true) {
    console.log("true", gender);
    var name = "raj";
  } else {
    console.log("false");
  }

  switch (1) {
    case 1:
      var city = "pune";
      console.log("switch block", name);
  }

  console.log(name, gender, city);
}

f1();

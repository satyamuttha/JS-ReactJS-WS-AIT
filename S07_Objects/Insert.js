var user = {
  name: "raj",
  gender: "male",
  id: 101,
  phone: 999999999,
};

console.log(user); //4

user.email = "raj@gmail.com";
user["age"] = 29;

console.log("----------------------------");

console.log(user); //5

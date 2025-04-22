var user1 = {
  name: "raj verma",
  gender: "male",
  city: "mumbai",
  phone: 999999999,
};
var user = {
  uname: "sneha",
};

var user2 = {
  ...user1,
  ...user,
  name: "Rohan Patil",
  city: "Hyd",
};

// console.log(user1);
// console.log("============================");
// console.log(user2);

var arr = [10, 20, 30, 40, 50];

var arr1 = ["hi", ...arr, true, false];

console.log(arr);
console.log("============================");
console.log(arr1);

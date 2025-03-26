var user = {
  name: "raj",
  gender: "male",
  id: 101,
  phone: 999999999,
};

console.log(user);
console.log("---------------------------");

delete user.id;
delete user[phone];

console.log(user);

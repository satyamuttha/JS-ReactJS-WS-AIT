var user = {
  uname: "raj verma",
  age: 29,
  email: "rajvermaofficial@gmail.com",
  address: {
    city: "Pune",
    state: "MH",
    pincode: 12345,
  },
};

//Nested Object : CRUD
var addressDetails = user.address;
var cityValue = addressDetails.city;
console.log(cityValue);

var stateValue = user.address.state;
console.log(stateValue);

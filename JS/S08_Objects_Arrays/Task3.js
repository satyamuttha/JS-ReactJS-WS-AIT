var user = {
  uname: "raj verma",
  age: 29,
  email: "rajvermaofficial@gmail.com",
  address: {
    city: {
      cname: "pune",
      cityAreas: {
        area1: "Viman nagar",
        area2: "Banner",
      },
    },
    state: "MH",
    pincode: 12345,
  },
};

var value = user.address.city.cityAreas.area2;

console.log(value);

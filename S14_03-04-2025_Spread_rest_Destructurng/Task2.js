function getData() {
  var city = "hyd";

  function setCity(newCity) {
    city = newCity;
    console.log(city);
  }

  return [city, setCity];
}

var [city, setCity] = getData();

console.log(city);
setCity("pune");

// var myArray = getData();

// console.log(myArray);//[]

// console.log(myArray[0]);//hyd

// myArray[1]("Pune"); //setCity()

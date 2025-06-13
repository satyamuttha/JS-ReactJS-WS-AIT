//export the variable
export var username = "Rohan Singh";

export let pin = 1234;

export function changePin(newpin) {
  pin = newpin;
  console.log("Pin Modified successfully");
}

function changeUserName(newUserName) {
  username = newUserName;
  console.log("User name Changes");
}

//Named Export

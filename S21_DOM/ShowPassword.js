function showHidePassword() {
  var inputCollecton = document.getElementsByTagName("input");
  var buttonDomElement = document.querySelector("button");
  var inputDomElement = inputCollecton[0];

  if (inputDomElement.type === "password") {
    // =  ==  ===
    inputDomElement.type = "text";
    buttonDomElement.innerText = "Hide Password";
    buttonDomElement.style.border = "2px solid red";
  } else {
    inputDomElement.type = "password";
    buttonDomElement.innerText = "Show Password";
    buttonDomElement.style.border = "2px solid green";
  }
}

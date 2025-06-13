//Named import the variable
import { username, pin, changePin } from "./user.js";

//Default import
// import displayProduct from "./products.js";

//Default import
import displayProduct, { updateProductName } from "./products.js";

console.log(username, pin);

changePin(3456);

console.log(pin);

displayProduct();
updateProductName("Samsung S24 ultra");

displayProduct();

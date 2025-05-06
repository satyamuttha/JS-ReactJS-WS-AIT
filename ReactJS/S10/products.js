var product = {
  productId: 123,
  title: "Iphone 16",
  price: 90000,
  rating: 4.6,
};

// export default function displayProduct() {
//   console.log(product);
// }

function displayProduct() {
  console.log(product);
}

export function updateProductName(newName) {
  product.title = newName;
  console.log("Product Name updated");
}

export default displayProduct;
//File can have only one default export

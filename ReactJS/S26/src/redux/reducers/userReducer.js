const userReducer = (store, action) => {
  var newdata = { name: "no-data", cart: [] };

  if (action.type === "user-name") {
    newdata = {
      ...store,
      name: action.payload,
    };
  } else if (action.type === "cart") {
    newdata = {
      ...store,
      cart: [...store.cart, action.payload],
    };
  }

  return newdata;
};

export default userReducer;

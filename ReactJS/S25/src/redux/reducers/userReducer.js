const userReducer = (store, action) => {
  var newdata = { name: "no-data" };

  if (action.type === "user-name") {
    newdata = {
      name: action.payload,
    };
  }

  return newdata;
};

export default userReducer;

export const countReducer = (state, action) => {
  var newdata;

  if (action.type === "inc") {
    newdata = state + action.payload;
  } else if (action.type === "dec") {
    newdata = state - action.payload;
  } else {
    newdata = 0;
  }

  return newdata;
};

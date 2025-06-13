const cartActionCreator = (data) => {
  return {
    type: "cart",
    payload: data,
  };
};
export default cartActionCreator;

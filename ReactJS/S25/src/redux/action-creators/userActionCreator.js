const userActionCreator = (data) => {
  return {
    type: "user-name",
    payload: data,
  };
};

export default userActionCreator;

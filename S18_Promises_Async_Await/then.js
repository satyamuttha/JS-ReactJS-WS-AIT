var promiseObject = new Promise(function (resolve, reject) {
  resolve({ ok: true });
});

// console.log(promiseObject);

promiseObject
  .then(function (successdata) {
    //implement action with success data
    console.log("then called");
    console.log(successdata);
  })
  .catch(function (errordata) {
    //implement action with error data
    console.log("catch called");
    console.log(errordata);
  });

var promiseObject = new Promise(function (resolve, reject) {
  reject({ ok: false, result: "Error data" });

  //Data stored through reject function is called error data
});

console.log(promiseObject);

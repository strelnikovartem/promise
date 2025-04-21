const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  //   setTimeout(() => {
  //     if (random > 0.5) {
  //       resolve('ok');
  //     }
  //     reject('oops');
  //   }, 1000);

  if (random > 0.5) {
    resolve('ok');
  }
  reject('oops');
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

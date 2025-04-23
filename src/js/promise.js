// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve('ok');
//       }
//       reject('oops');
//     }, 1000);

//   if (random > 0.5) {
//     resolve('ok');
//   }
//   reject('oops');
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// ===========//

// const number = new Promise((resolve, regect) => {
//   resolve(5);
// });

// number
//   .then(data => {
//     return data * 2;
//   })
//   .then(data => {
//     return data * 3;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// =========//

// const promise = new Promise(resolve => {
//   resolve(10);
// });

// promise
//   .then(value => {
//     return new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => {
//     console.log(value);
//   });

//==========//

// console.log('step 1');

// setTimeout(() => {
//   console.log('step 2');
// }, 0);

// new Promise(resolve => {
//   resolve('step 3');
// })
//   .then(data => {
//     console.log(data);
//     return `step 5`;
//   })
//   .then(data => console.log(data));

// setTimeout(() => {
//   console.log('step 4');
// }, 0);

// console.log('step 6');

//=============//

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       onSuccess(`sale ${dish}`);
//       return;
//     }
//     onError('end');
//   }, 1000);
// };

// makeOrder(
//   'car',
//   str => console.log('onSuccess', str),
//   str => console.log('onError', str)
// );

//============//

// const makeOrder = dish => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(`sale ${dish}`);
//       }
//       reject('end');
//     }, 1000);
//   });
// };

// makeOrder('car')
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//=============//

// const makeOrder = dish => {
//   const random = Math.random();

//   return random > 0.5 ? Promise.resolve(`sale ${dish}`) : Promise.reject('end');

//   //   if (random > 0.5) {
//   //     return Promise.resolve(`sale ${dish}`);
//   //   }
//   //   return Promise.reject('end');
// };

// makeOrder('car')
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//==============//

const startTime = Date.now();

const res1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      resolve({ title: 'first', time: deltaTime });
    }, 3000);
  });
};

const res2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      resolve({ title: 'second', time: deltaTime });
    }, 1000);
  });
};

const res3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      resolve({ title: 'third', time: deltaTime });
    }, 6000);
  });
};

// Promise.all([res1(), res2(), res3()])
//     .then(res => console.log(res))
//     .catch(error => console.log(error))
//     .finally(() => console.log('finally'));

Promise.race([res1(), res2(), res3()])
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finally'));

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

// allSettled() - returns a promise that resolves after all of the given promises have either resolved or rejected
Promise.allSettled([promiseOne, promiseTwo]) // promiseOne and promiseTwo need to complete first
  .then((data) => console.log(data)) // before this is run
  .catch((err) => console.log(err));

// Promise.all()

// any() - returns a promise that resolves as soon as one of the promises in the iterable resolves, or rejects if all of the promises in the iterable reject
// Only needs EITHER promiseOne or promiseTwo to complete
Promise.any([promiseOne, promiseTwo]).then((data) => console.log(data));

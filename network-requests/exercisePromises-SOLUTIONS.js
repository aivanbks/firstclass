// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success'); // RESOLVED HERE
//   }, 4000);
// });

const promise = Promise.resolve(setTimeout(() => console.log('success'), 4000));

// first param: callback function------ () => {}, () => ...
// second param: time in milliseconds: 4000ms = 4 seconds
setTimeout(() => {
  resolve('success');
}, 4000);

// const promise = new Promise((resolve, reject) => {});

// #2) Run the above promise and THEN make it console.log "success"
promise.then(console.log);

// const api = 'https://jsonplaceholder.typicode.com/posts/1';
// fetch(api) // "send GET request"
//   .then((response) => response.json()) // "when you get a response, convert it to JSON"
//   .then((data) => {
//     console.log(data);
//     console.log('Data received');
//   }); // "when you get the JSON, log it to the console"

// or
promise.then((resp) => console.log(resp));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
// BASICALLY SHORTENING THE CODE FOR QUESTION 1.
// const promise = Promise.resolve(
//   setTimeout(() => {
//     console.log("success");
//   }, 4000)
// );

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('Ooops something went wrong'));

// CATCH and FINALLY BLOCKS
const promiseRejected = Promise.reject(
  setTimeout(() => console.log('unsuccessful'), 4000)
)
  .catch(() => {
    // CATCH BLOCK - if promise is rejected, catch the error
    console.log('Ooops something went wrong');
  })
  .finally(() => console.log('I am done')); // FINALLY BLOCK - runs regardless of promise being resolved or rejected

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/aeople/3',
  'http://swapi.dev/api/people/4',
];

// PROMISE.ALL(PROMISE_ARRAY) - takes an array of promises and returns a single promise
// fetch() - returns a promise

// Fetches data from first URL - first character in people json
fetch(urls[0])
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch(urls[1])
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch(urls[2])
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch(urls[3])
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// CALLBACK TO FETCH DATA FROM ALL URLS
// urls.map((url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// })

// Promise.all([promise1, promise2]).then((arrayOfResults) => {
//   console.log(arrayOfResults);
// });

Promise.all(urls.map((url) => fetch(url).then((people) => people.json())))
  .then((array) => {
    console.log('1', array[0]);
    console.log('2', array[1]);
    console.log('3', array[2]);
    console.log('4', array[3]);
  })
  .catch((err) => console.log('ughhhh fix it!', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

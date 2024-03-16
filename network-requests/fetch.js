// Synchronous - Do A, then B, then C
const x = 2;
const y = 3;

// Sometimes we have alot of assets and documents to load from the browser
// CPU ---> can do things in parallel (multiple things at once)
/**
 * Synchronous version
 * const x = getDataFromServer('x'); HTML
 * const y = getDataFromServer('y'); CSS // HAVE TO WAIT for line above to finish
 *
 */

/**
 * Asynchronous version
 * fetch() --> returns a PROMISE
 *
 * PROMISE: "I promise to give you a value in the future"
 *
 * const x = getAsyncDataFromServer('x'); HTML
 * const y = getAsyncDataFromServer('y'); CSS // DON'T HAVE TO WAIT for line above to finish
 */

const api = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(api) // "send GET request"
  .then((response) => response.json()) // "when you get a response, convert it to JSON"
  .then((data) => {
    console.log(data);
    console.log('Data received');
  }); // "when you get the JSON, log it to the console"

// FETCH from api
//   --> receive a response, convert to JSON
//   --> log the data from converted JSON

// function convertToJson(response) {
//   // .then(response => response.json())
//   return response.json();
// }

// function printData(data) {
//   // .then(data => console.log(data) ----- data = response.json()
//   console.log(data);
// }

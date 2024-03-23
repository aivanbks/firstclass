// ASYNC AWAIT
// Async functions are a combination of promises, and basically, they are a higher level abstraction over promises.

// Async functions always return a promise.

movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

// ASYNC AWAIT
async function playerStart() {
  await movePlayer(100, 'Left'); // pause
  await movePlayer(400, 'Left'); // pause
  await movePlayer(10, 'Right'); // pause
  await movePlayer(330, 'Left'); // pause

  // movePlayer(100, 'Left');
  // movePlayer(400, 'Left');
  // movePlayer(10, 'Right');
  // movePlayer(330, 'Left');
}

playerStart();
playerStart();
playerStart();

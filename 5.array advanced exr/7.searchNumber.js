function searchNum(arr, commands) {
  let numElements = commands.shift();
  let numDelete = commands.shift();
  let numRepeat = commands.shift();
  let counter = 0;

  let arrElements = arr.slice(0, numElements);
  arrElements.splice(0, numDelete);

  for (let count of arrElements) {
    if (numRepeat === count) {
      counter++;
    }
  }

  console.log(`Number ${numRepeat} occurs ${counter} times.`);
}
searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);

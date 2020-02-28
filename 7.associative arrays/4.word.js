function wordOccurrences(input) {
  let myMap = new Map();

  for (let data of input) {
    let count = 1;

    if (myMap.has(data)) {
      let timesOld = myMap.get(data);
      let timesNew = timesOld + 1;
      myMap.set(data, timesNew);
    } else {
      myMap.set(data, count);
    }
  }

  let sorted = [...myMap].sort((a, b) => b[1] - a[1]);

  sorted.forEach(e => console.log(`${e[0]} -> ${e[1]} times`));
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence"
]);

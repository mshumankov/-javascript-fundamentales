function wordsTracker(input) {
  let lookingWord = input.shift().split(" ");
  let listWord = {};

  for (let word of lookingWord) {
    listWord[word] = 0;
  }

  for (let word of input) {
    if (listWord.hasOwnProperty(word)) {
      listWord[word]++;
    }
  }

  let sorted = Object.entries(listWord).sort((a, b) => b[1] - a[1]);
  for (let info of sorted) {
    console.log(`${info[0]} - ${info[1]}`);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task"
]);

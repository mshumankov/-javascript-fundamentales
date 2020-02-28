function oddOccurrences(input) {
  let elements = {};
  let arrElements = input.split(" ");
  let odd = [];

  for (let word of arrElements) {
    word = word.toLowerCase();

    if (elements.hasOwnProperty(word)) {
      elements[word]++;
    } else {
      elements[word] = 1;
    }
  }

  for (let prop in elements) {
    if (elements[prop] % 2 !== 0) {
      odd.push(prop);
    }
  }
  console.log(odd.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

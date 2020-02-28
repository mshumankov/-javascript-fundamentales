function maxElements(input) {
  let maxIndex = 0;
  let maxSequence = 0;

  for (let i = 0; i < input.length; i++) {
    let counter = 1;

    for (let j = i + 1; j < input.length; j++) {
      if (input[i] !== input[j]) {
        break;
      } else {
        counter++;
      }
    }

    if (counter > maxSequence) {
      maxSequence = counter;
      maxIndex = i;
    }
  }
  let index = input[maxIndex];
  console.log(`${index} `.repeat(maxSequence).trim());
}
maxElements([4, 4, 4, 4]);

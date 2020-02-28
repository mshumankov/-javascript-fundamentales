function lastShop(input) {
  let paintNumbers = input
    .shift()
    .split(" ")
    .map(Number);

  let end = input.pop();

  for (let data of input) {
    let tokens = data.split(" ");
    let command = tokens[0];

    if (command === "Change") {
      let paintNum = Number(tokens[1]);
      let changedNum = Number(tokens[2]);

      let index = paintNumbers.indexOf(paintNum);

      if (index !== -1) {
        paintNumbers.splice(index, 1, changedNum);
      }
    } else if (command === "Hide") {
      let paintNum = Number(tokens[1]);

      let index = paintNumbers.indexOf(paintNum);

      if (index !== -1) {
        paintNumbers.splice(index, 1);
      }
    } else if (command === "Switch") {
      let paintNumFirst = Number(tokens[1]);
      let paintNumSecond = Number(tokens[2]);

      let indexFirst = paintNumbers.indexOf(paintNumFirst);
      let indexSecond = paintNumbers.indexOf(paintNumSecond);

      if (indexFirst !== -1 && indexSecond !== -1) {
        paintNumbers[indexFirst] = paintNumSecond;
        paintNumbers[indexSecond] = paintNumFirst;
      }
    } else if (command === "Insert") {
      let place = Number(tokens[1]);
      let paintNum = Number(tokens[2]);

      if (place + 1 >= 0 && place + 1 <= paintNumbers.length) {
        paintNumbers.splice(place + 1, 0, paintNum);
      }
    } else if (command === "Reverse") {
      let reversed = paintNumbers.reverse();
      paintNumbers = reversed;
    }
  }

  console.log(paintNumbers.join(" "));
}
lastShop([
  "115 115 101 114 73 111 116 75",
  "Insert 5 114",
  "Switch 116 73",
  "Hide 75",
  "Reverse ",
  "Change 73 70",
  "Insert 10 85",
  "END"
]);

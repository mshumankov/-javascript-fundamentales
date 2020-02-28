function arrayManipulator(arr, commands) {
  for (let i = 0; i < commands.length; i++) {
    let readComands = commands[i].split(" ");
    let action = readComands.shift();

    let arrPairs = [];

    if (action === "add") {
      let index = Number(readComands[0]);
      let element = Number(readComands[1]);

      arr.splice(index, 0, element);
    } else if (action === "addMany") {
      let index = Number(readComands.shift());

      for (let i = readComands.length - 1; i >= 0; i--) {
        let current = Number(readComands.pop());

        arr.splice(index, 0, current);
      }
      //   let counter = 0;
      //   for (let i = index; i < index + readComands.length; i++) {
      //     let currentNum = Number(readComands[counter]);
      //     arr[i] = currentNum;
      //     counter++;
      // }
    } else if (action === "contains") {
      let element = Number(readComands.shift());
      console.log(arr.indexOf(element));
    } else if (action === "remove") {
      let index = Number(readComands.shift());
      arr.splice(index, 1);
    } else if (action === "shift") {
      let position = Number(readComands.shift());

      for (let i = 1; i <= position; i++) {
        let move = arr.shift();
        arr.push(move);
      }
    } else if (action === "sumPairs") {
      for (let i = 0; i < arr.length; i += 2) {
        let first = arr[i];
        let second = arr[i + 1];
        if (second === undefined) {
          second = 0;
        }

        let result = first + second;
        arrPairs.push(result);
      }

      arr = arrPairs;
    } else {
      console.log(arr);
      return;
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "sumPairs", "print"]
);

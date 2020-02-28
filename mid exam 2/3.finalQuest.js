function finalQuest(arrWords) {
  let mesage = arrWords.shift().split(" ");

  for (let i of arrWords) {
    let commandInfo = i.split(" ");
    let command = commandInfo[0];

    if (command === "Stop") {
      break;
    }

    if (command === "Delete") {
      let index = Number(commandInfo[1]);

      if (index >= 0 && index < mesage.length - 1) {
        mesage.splice(index + 1, 1);
      }
    } else if (command === "Swap") {
      let wordFirst = commandInfo[1];
      let wordSecond = commandInfo[2];

      let firstWordIndex = mesage.indexOf(wordFirst);
      let secondWordIndex = mesage.indexOf(wordSecond);

      if (firstWordIndex !== -1 && secondWordIndex !== -1) {
        mesage[firstWordIndex] = wordSecond;
        mesage[secondWordIndex] = wordFirst;
      }
    } else if (command === "Put") {
      let word = commandInfo[1];
      let index = Number(commandInfo[2]);

      if (index > 0 && index <= mesage.length + 1) {
        mesage.splice(index - 1, 0, word);
      }
    } else if (command === "Sort") {
      mesage.sort((a, b) => b.localeCompare(a));
    } else if (command === "Replace") {
      let wordFirst = commandInfo[1];
      let wordSecond = commandInfo[2];

      let secondWordIndex = mesage.indexOf(wordSecond);

      if (secondWordIndex !== -1) {
        mesage[secondWordIndex] = wordFirst;
      }
    }
  }

  console.log(mesage.join(" "));
}
finalQuest(["This the my quest! final", "Put it 6", "Stop", ""]);

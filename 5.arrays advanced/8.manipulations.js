function manipulations(input) {
  let arr = input
    .shift()
    .split(" ")
    .map(num => (num = Number(num)));

  for (let command of input) {
    let commandArr = command.split(" ");
    let action = commandArr[0];
    let numOrIndex = Number(commandArr[1]);
    let index = Number(commandArr[2]);

    function add(num) {
      arr.push(numOrIndex);
    }

    function remove(num) {
      let newArr = arr.filter(currentNum => currentNum !== num);
      arr = newArr;
    }

    function removeAt(index) {
      let newArr = arr.filter((currentNum, indexArr) => indexArr !== index);
      arr = newArr;
    }

    function insert(num, index) {
      //   let newArr = arr.map((value, indexArr) => {
      //     if (indexArr === index) {
      //       value = num;
      //       return value;
      //     } else {
      //       return value;
      //     }
      //   });
      //   arr = newArr;

      let left = arr.splice(index);
      arr = [...arr, num, ...left];
    }

    if (action === "Add") {
      add(numOrIndex);
    } else if (action === "Remove") {
      remove(numOrIndex);
    } else if (action === "RemoveAt") {
      removeAt(numOrIndex);
    } else if (action === "Insert") {
      insert(numOrIndex, index);
    }
  }

  console.log(arr.join(" "));
}
manipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3"
]);

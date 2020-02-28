function solve(input) {
  let train = input
    .shift()
    .split(" ")
    .map(Number);

  let maxCapacity = Number(input.shift());

  for (let parameter of input) {
    let command = parameter.split(" ");

    if (command.length > 1) {
      let addWagon = Number(command[1]);
      train.push(addWagon);
    } else {
      let passengers = Number(command[0]);

      for (let i = 0; i < train.length; i++) {
        let wagon = train[i];
        if (wagon + passengers <= maxCapacity) {
          train[i] = wagon + passengers;
          break;
        }
      }
    }
  }

  console.log(train.join(" "));
}
solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

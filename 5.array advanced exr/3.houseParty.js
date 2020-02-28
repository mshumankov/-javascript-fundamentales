function houseParty(input) {
  let list = [];

  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(" ");
    let name = command[0];

    if (command.length === 3) {
      if (list.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        list.push(name);
      }
    } else {
      let indexPerson = list.indexOf(name);

      if (indexPerson === -1) {
        console.log(`${name} is not in the list!`);
      } else {
        list.splice(indexPerson, 1);
      }
    }
  }

  console.log(list.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!"
]);

function presentDelivery(args) {
  let arrSanta = args
    .shift()
    .split("@")
    .map(Number);

  let index = 0;

  for (let i = 0; i < args.length; i++) {
    let tokens = args[i].split(" ");
    let command = tokens[0];
    let num = Number(tokens[1]);

    if (command === "Merry") {
      break;
    }

    if (command === "Jump") {
      for (let i = 0; i < num; i++) {
        index += 1;
        if (index >= arrSanta.length) {
          index = 0;
        }
      }
    }

    arrSanta[index] -= 2;

    if (arrSanta[index] < 0) {
      arrSanta[index] = 0;
      console.log(`House ${index} will have a Merry Christmas.`);
    }
  }
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < arrSanta.length; i++) {
    let house = arrSanta[i];

    if (house > 0) {
      counter++;
    }

    sum += house;
  }

  console.log(`Santa's last position was ${index}.`);

  if (sum === 0) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Santa has failed ${counter} houses.`);
  }
}
presentDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Merry Xmas!"
]);

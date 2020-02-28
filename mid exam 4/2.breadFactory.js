function breadFactory(input) {
  let inputCommands = input[0].split("|");
  let coins = 100;
  let energy = 100;

  for (let i of inputCommands) {
    let tokens = i.split("-");
    let command = tokens[0];
    let num = Number(tokens[1]);

    if (command === "rest") {
      let gained = 0;
      if (energy + num > 100) {
        gained = 100 - energy;
        energy = 100;
      } else {
        gained = num;
        energy += gained;
      }

      console.log(`You gained ${gained} energy.`);
      console.log(`Current energy: ${energy}.`);
    } else if (command === "order") {
      if (energy - 30 < 0) {
        energy += 50;
        console.log(`You had to rest!`);
      } else {
        coins += num;
        energy -= 30;
        console.log(`You earned ${num} coins.`);
      }
    } else {
      coins -= num;

      if (coins > 0) {
        console.log(`You bought ${command}.`);
      } else {
        console.log(`Closed! Cannot afford ${command}.`);
        break;
      }
    }
  }

  if (coins > 0) {
    console.log(`Day completed!`);
    console.log(`Coins: ${coins}`);
    console.log(`Energy: ${energy}`);
  }
}
breadFactory([
  "order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000"
]);

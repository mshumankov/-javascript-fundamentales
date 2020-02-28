function dungenest(args) {
  let arr = args[0].split("|");
  let health = 100;
  let coins = 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split(" ");
    let command = current[0];
    let num = Number(current[1]);
    counter++;

    if (command === "potion") {
      health += num;

      if (health > 100) {
        let diff = health - 100;
        health = 100;
        console.log(`You healed for ${num - diff} hp.`);
      } else {
        console.log(`You healed for ${num} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      coins += num;
      console.log(`You found ${num} coins.`);
    } else {
      health -= num;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${counter}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungenest(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

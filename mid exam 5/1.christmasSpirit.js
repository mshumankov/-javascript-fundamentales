function christmasSpirit(args) {
  let quantity = Number(args[0]);
  let days = Number(args[1]);

  let ornamentSetPrice = 2;
  let skirtPrice = 5;
  let garlandsPrice = 3;
  let lightsPrice = 15;

  let cost = 0;
  let spirit = 0;

  for (let i = 1; i <= days; i++) {
    if (i % 11 === 0) {
      quantity += 2;
    }

    if (i % 2 === 0) {
      cost += ornamentSetPrice * quantity;
      spirit += 5;
    }

    if (i % 3 === 0) {
      cost += skirtPrice * quantity + garlandsPrice * quantity;
      spirit += 13;
    }

    if (i % 5 === 0) {
      cost += lightsPrice * quantity;
      spirit += 17;

      if (i % 3 === 0) {
        spirit += 30;
      }
    }

    if (i % 10 === 0) {
      cost += skirtPrice + garlandsPrice + lightsPrice;
      spirit -= 20;
      if (i === days) {
        spirit -= 30;
      }
    }
  }

  console.log(`Total cost: ${cost}`);
  console.log(`Total spirit: ${spirit}`);
}
christmasSpirit(["3", "20"]);

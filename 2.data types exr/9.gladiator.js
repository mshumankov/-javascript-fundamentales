function gladiator(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmet = 0;
  let sword = 0;
  let shield = 0;
  let armor = 0;
  let counter = 1;

  for (let i = 1; i <= lostFights; i++) {
    let helmetBroken = false;
    let swordBroken = false;

    if (i % 2 === 0) {
      helmet++;
      helmetBroken = true;
    }

    if (i % 3 === 0) {
      sword++;
      swordBroken = true;
    }

    if (helmetBroken === true && swordBroken === true) {
      shield++;

      if (counter % 2 === 0) {
        armor++;
      }
      counter++;
    }
  }
  let result =
    helmet * helmetPrice +
    sword * swordPrice +
    shield * shieldPrice +
    armor * armorPrice;
  console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
gladiator(23, 12.5, 21.5, 40, 200);

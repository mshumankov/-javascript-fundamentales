function partyProfit(args) {
  let arr = args.map(Number);
  let people = arr.shift();
  let days = arr.shift();

  let coinsPerson = 0;
  let coinsAll = 0;

  for (let i = 1; i <= days; i++) {
    if (i % 10 === 0) {
      people -= 2;
    }
    if (i % 15 === 0) {
      people += 5;
    }

    coinsAll += 50 - 2 * people;

    if (i % 3 === 0) {
      coinsAll -= 3 * people;
    }
    if (i % 5 === 0) {
      coinsAll += 20 * people;
      if (i % 3 === 0) {
        coinsAll -= 2 * people;
      }
    }
  }

  let result = coinsAll / people;

  console.log(
    `${people} companions received ${Math.floor(result)} coins each.`
  );
}
partyProfit(["15", "30"]);

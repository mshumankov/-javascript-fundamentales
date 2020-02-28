function bitcoin(args) {
  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;
  let money = 0;
  let bitcoinNumber = 0;
  let boughtDay = 0;
  let counter = 0;
  let chek = false;

  for (let i = 0; i <= args.length - 1; i++) {
    let mineGold = Number(args[i]);
    counter++;
    if (counter === 3) {
      mineGold = mineGold - mineGold * 0.3;
      counter = 0;
    }
    let countGold = mineGold * goldPrice;

    money += countGold;

    while (money >= bitcoinPrice) {
      bitcoinNumber++;
      if (chek === false) {
        boughtDay = counter;
        chek = true;
      }

      money -= bitcoinPrice;
    }
  }

  console.log(`Bought bitcoins: ${bitcoinNumber}`);
  if (bitcoinNumber > 0) {
    console.log(`Day of the first purchased bitcoin: ${boughtDay}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124]);

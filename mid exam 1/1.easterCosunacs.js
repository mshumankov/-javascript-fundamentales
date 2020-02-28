function easterCozunacs(args) {
  let budget = Number(args.shift());
  let priceFlour = Number(args.shift());
  let priceEggs = 0.75 * priceFlour;
  let priceMilk = (priceFlour * 1.25) / 4;
  let cozunacPrice = priceEggs + priceFlour + priceMilk;
  let counter = 0;
  let coloredEggs = 0;

  while (budget > cozunacPrice) {
    counter++;
    coloredEggs += 3;
    if (counter % 3 === 0) {
      coloredEggs -= counter - 2;
    }

    budget -= cozunacPrice;
  }

  console.log(
    `You made ${counter} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(
      2
    )}BGN left.`
  );
}
easterCozunacs(["20.50", "1.25"]);

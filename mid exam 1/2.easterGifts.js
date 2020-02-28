function easterGifts(input) {
  let planGifts = input.shift().split(" ");

  for (let i of input) {
    let commandSplit = i.split(" ");
    let command = commandSplit.shift();
    let gift = commandSplit.shift();

    if (command === "OutOfStock") {
      let arrGifts = planGifts.map(giftCurrent => {
        if (giftCurrent === gift) {
          return "None";
        }
        return giftCurrent;
      });

      planGifts = arrGifts;
    } else if (command === "Required") {
      let index = Number(commandSplit.shift());

      if (index <= planGifts.length) {
        planGifts[index] = gift;
      }
    } else if (command === "JustInCase") {
      let lastGift = planGifts.length - 1;
      planGifts[lastGift] = gift;
    }
  }
  let result = planGifts.filter(currentGift => currentGift !== "None");
  console.log(result.join(" "));
}
easterGifts([
  "Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes",
  "OutOfStock Eggs",
  "Required Spoon 2",
  "JustInCase ChocolateEgg",
  "No Money"
]);

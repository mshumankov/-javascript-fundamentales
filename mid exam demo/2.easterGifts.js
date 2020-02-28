function EasterGifts(input) {
  let gifts = input.shift().split(" ");
  let cut = input.pop();

  for (let i of input) {
    let tokens = i.split(" ");
    let command = tokens[0];
    let gift = tokens[1];

    if (command === "OutOfStock") {
      for (let i = 0; i < gifts.length; i++) {
        let current = gifts[i];

        if (current === gift) {
          gifts[i] = "None";
        }
      }
    } else if (command === "Required") {
      let index = tokens[2];

      if (index >= 0 && index < gifts.length) {
        gifts[index] = gift;
      }
    } else if (command === "JustInCase") {
      gifts[gifts.length - 1] = gift;
    }
  }

  let result = gifts.filter(gift => gift !== "None");
  console.log(result.join(" "));
}
EasterGifts([
  "Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes",
  "OutOfStock Eggs",
  "Required Spoon 2",
  "JustInCase ChocolateEgg",
  "No Money"
]);

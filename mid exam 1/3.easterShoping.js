function easterShoping(input) {
  let shopList = input.shift().split(" ");
  let countCommands = input.shift();

  for (let i = 0; i < input.length; i++) {
    let commandSplit = input[i].split(" ");
    let command = commandSplit.shift();

    if (command === "Include") {
      let shop = commandSplit.shift();
      include(shop);
    } else if (command === "Visit") {
      let firstLast = commandSplit.shift();
      let shopNum = commandSplit.shift();

      visit(firstLast, shopNum);
    } else if (command === "Prefer") {
      let firstShopIndex = Number(commandSplit.shift());
      let secondShopIndex = Number(commandSplit.shift());

      prefer(firstShopIndex, secondShopIndex);
    } else if (command === "Place") {
      let shop = commandSplit.shift();
      let index = Number(commandSplit.shift());
      placeInArr(shop, index);
    }

    function include(shop) {
      shopList.push(shop);
    }

    function visit(pleace, numberShops) {
      if (numberShops <= shopList.length) {
        if (pleace === "first") {
          for (let i = 1; i <= numberShops; i++) {
            shopList.shift();
          }
        } else {
          for (let i = 1; i <= numberShops; i++) {
            shopList.pop();
          }
        }
      }
    }

    function prefer(firstIndex, secondIndex) {
      if (
        firstIndex <= shopList.length - 1 &&
        secondIndex <= shopList.length - 1 &&
        (firstIndex >= 0 && secondIndex >= 0)
      ) {
        let firstShop = shopList[firstIndex];
        let secondShop = shopList[secondIndex];

        shopList[firstIndex] = secondShop;
        shopList[secondIndex] = firstShop;
      }
    }

    function placeInArr(shop, indexShop) {
      if (indexShop < shopList.length && indexShop >= -1) {
        shopList.splice(indexShop + 1, 0, shop);
      }
    }
  }

  console.log(`Shops left:`);
  console.log(shopList.join(" "));
}
easterShoping([
  "Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore",
  "5",
  "Prefer 0 7"
]);

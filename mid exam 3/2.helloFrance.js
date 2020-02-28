function helloFrance(args) {
  let budget = Number(args[1]);
  let colectionItems = args[0].split("|");
  let sumItems = 0;
  let sumItemProfit = 0;
  let itemProfit = [];

  for (let i = 0; i < colectionItems.length; i++) {
    let data = colectionItems[i].split("->");
    let item = data.shift();
    let priceItem = Number(data.shift());

    if (budget < priceItem) {
      continue;
    }

    if (item === "Clothes") {
      if (priceItem < 50) {
        budget -= priceItem;
        sumItems += priceItem;
        itemProfit.push(Number((priceItem * 1.4).toFixed(2)));
      }
    } else if (item === "Shoes") {
      if (priceItem < 35) {
        budget -= priceItem;
        sumItems += priceItem;
        itemProfit.push(Number((priceItem * 1.4).toFixed(2)));
      }
    } else if (item === "Accessories") {
      if (priceItem < 20.5) {
        budget -= priceItem;
        sumItems += priceItem;
        itemProfit.push(Number((priceItem * 1.4).toFixed(2)));
      }
    }
  }

  itemProfit.forEach(item => (sumItemProfit += item));

  let profit = sumItemProfit - sumItems;
  let total = sumItemProfit + budget;

  console.log(itemProfit.join(" "));
  console.log(`Profit: ${Number(profit.toFixed(2))}`);

  if (total >= 150) {
    console.log(`Hello, France!`);
  } else {
    console.log(`Time to go.`);
  }
}
helloFrance([
  "Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60",
  "90"
]);

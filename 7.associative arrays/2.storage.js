function storage(input) {
  let myMap = new Map();

  for (let data of input) {
    let tokens = data.split(" ");
    let product = tokens[0];
    let quantity = Number(tokens[1]);

    if (myMap.has(product)) {
      let oldQuantity = myMap.get(product);
      let newQuantity = oldQuantity + quantity;
      myMap.set(product, newQuantity);
    } else {
      myMap.set(product, quantity);
    }
  }

  for (let [product, quantity] of myMap) {
    console.log(`${product} -> ${quantity}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);

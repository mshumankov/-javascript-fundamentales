function storeProvision(stockStore, orderedStore) {
  let products = {};

  for (let i = 0; i < stockStore.length; i += 2) {
    let currentProduct = stockStore[i];
    let quantity = Number(stockStore[i + 1]);

    products[currentProduct] = quantity;
  }

  for (let i = 0; i < orderedStore.length; i += 2) {
    let currentProduct = orderedStore[i];
    let quantity = Number(orderedStore[i + 1]);

    let check = products.hasOwnProperty(currentProduct);

    check
      ? (products[currentProduct] = products[currentProduct] + quantity)
      : (products[currentProduct] = quantity);
  }

  for (let prop in products) {
    console.log(`${prop} -> ${products.prop}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

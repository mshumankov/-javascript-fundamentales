function storageClass() {
  class Storage {
    result() {
      let sum = 0;
      this.storage.forEach(el => {
        sum += el.quantity;
      });

      return sum;
    }

    constructor(capacity, productOne, productTwo, productThree) {
      this.capacity = capacity - result();
      this.storage = [];
    }
  }

  let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
  let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
  let productThree = { name: "Bread", price: 1.1, quantity: 8 };
  let storage = new Storage(50);
  storage.addProduct(productOne);
  storage.addProduct(productTwo);
  storage.addProduct(productThree);
  storage.getProducts();
  console.log(storage.capacity);
  console.log(storage.totalCost);
}
storageClass();

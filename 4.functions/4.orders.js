function shop(order, quantity) {
  if (order === "coffee") {
    return (quantity * 1.5).toFixed(2);
  } else if (order === "coke") {
    return (quantity * 1.4).toFixed(2);
  } else if (order === "water") {
    return (quantity * 1).toFixed(2);
  } else if (order === "snacks") {
    return (quantity * 2).toFixed(2);
  }
}
console.log(shop("water", 5));

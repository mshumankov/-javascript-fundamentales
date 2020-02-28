function products(args) {
  let arrProducts = args.sort();
  let result = arrProducts.map((product, index) => {
    return (currentProduct = `${index + 1}.${product}`);
  });
  console.log(result.join("\n"));
}
products(["Potatoes", "Tomatoes", "Onions", "Apples"]);

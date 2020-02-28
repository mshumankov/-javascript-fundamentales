function addOrSubstract(args) {
  let sumOriginal = 0;
  let sumModified = 0;
  for (let i = 0; i < args.length; i++) {
    sumOriginal += args[i];
    if (args[i] % 2 === 0) {
      args[i] = args[i] + i;
      sumModified += args[i];
    } else {
      args[i] = args[i] - i;
      sumModified += args[i];
    }
  }
  console.log(args);
  console.log(sumOriginal);
  console.log(sumModified);
}
addOrSubstract([5, 15, 23, 56, 35]);

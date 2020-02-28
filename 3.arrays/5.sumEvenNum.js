function substraction(args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    let num = Number(args[i]);
    if (num % 2 === 0) {
      sum += num;
    }
  }
  console.log(sum);
}
substraction(["1", "2", "3", "4", "5", "6"]);

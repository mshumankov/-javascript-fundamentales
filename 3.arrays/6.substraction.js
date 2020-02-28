function substraction(args) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < args.length; i++) {
    let num = Number(args[i]);
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  let result = sumEven - sumOdd;
  console.log(result);
}
substraction(["1", "2", "3", "4", "5", "6"]);

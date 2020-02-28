function sumDigits(arg) {
  let num = String(arg);
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let currentNumber = parseInt(num[i]);
    sum += currentNumber;
  }
  console.log(sum);
}
sumDigits(245678);

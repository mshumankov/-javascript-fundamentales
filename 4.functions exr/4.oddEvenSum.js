function oddEvenSum(num) {
  let strNum = `${num}`;
  let sumEven = 0;
  let sumOdd = 0;

  let even = num => (sumEven += num);
  let odd = num => (sumOdd += num);

  for (let i = 0; i < strNum.length; i++) {
    let currentNum = Number(strNum[i]);

    if (currentNum % 2 === 0) {
      even(currentNum);
    } else {
      odd(currentNum);
    }
  }

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddEvenSum(123456);

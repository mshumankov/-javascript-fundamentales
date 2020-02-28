function factorial(firstNum, secondNum) {
  let firstFactorial = firstNum;
  let secondFactorial = secondNum;

  function countFirst(number) {
    for (let i = number; i > 1; i--) {
      firstFactorial = (i - 1) * firstFactorial;
    }
  }

  function countSecond(number) {
    for (let i = number; i > 1; i--) {
      secondFactorial = (i - 1) * secondFactorial;
    }
  }

  function result(firstFactorial, secondFactorial) {
    console.log((firstFactorial / secondFactorial).toFixed(2));
  }

  countFirst(firstNum);
  countSecond(secondNum);
  result(firstFactorial, secondFactorial);
}
factorial(6, 2);

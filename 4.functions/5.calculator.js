function calculator(firstNum, secondNum, operator) {
  switch (operator) {
    case "multiply":
      let multiply = (firstNum, secondNum) => firstNum * secondNum;
      return multiply(firstNum, secondNum);
    case "divide":
      let divide = (firstNum, secondNum) => firstNum / secondNum;
      return divide(firstNum, secondNum);
    case "add":
      let add = (firstNum, secondNum) => firstNum + secondNum;
      return add(firstNum, secondNum);
    case "subtract":
      let subtract = (firstNum, secondNum) => firstNum - secondNum;
      return subtract(firstNum, secondNum);
  }
}
console.log(calculator(5, 5, "multiply"));
